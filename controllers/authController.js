const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  const { username, email, password } = req.body;

  const emailLowerCase = email.toLowerCase();

  try {
    const existingUser = await User.findOne({ email: emailLowerCase });
    if (existingUser) {
      return res.render('signup', { message: 'Email already registered!' });
    }
    
    const newUser = new User({ username, email: emailLowerCase, password });
    await newUser.save();
    res.render('signin', { message: 'User registered successfully! Please sign in.' });
  } catch (error) {
    res.render('signup', { message: 'Error registering user. Please try again.' });
  }
};


const login = async (req, res) => {
  const { email, password } = req.body;

  const emailLowerCase = email.toLowerCase();

  try {
    const user = await User.findOne({ email: emailLowerCase }).populate('courses');
    if (!user) {
      return res.render('signin', { message: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.render('signin', { message: 'Invalid email or password.' });
    }

    // Sort courses by title in ascending order
    user.courses.sort((a, b) => a.title.localeCompare(b.title));

    // Save the sorted user in the session
    req.session.user = user;
    req.session.loggedIn = true;

    res.redirect('/stream'); 
  } catch (error) {
    console.error('Error during login:', error);
    res.render('signin', { message: 'Error signing in. Please try again.' });
  }
};


function isLoggedIn(req, res, next) {
  if (req.session.loggedIn) {
    return next();
  } else {
    return res.status(401).json({ message: 'Unauthorized. Please log in.' });
  }
}


const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Error logging out' });
    }
    res.clearCookie('connect.sid'); 
    res.redirect("/");
  });
};


module.exports = {
    register,
    login,
    logout,
    isLoggedIn
}