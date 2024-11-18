const nodemailer = require("nodemailer");
const {isLoggedIn} = require("./authController")
const User = require("../models/UserModel")
const CalculatorUser = require("../models/usedCalculator")
const Course = require("../models/CourseModel")

const getIndexPage = (req, res) => {
  res.render("index" , {loggedIn: req.session.loggedIn, user: req.session.user});
};

const getCoursesPage = (req, res) => {
  res.render("courses" , {loggedIn: req.session.loggedIn, user: req.session.user});
};

const getCallConsultingPage = (req, res) => {
  res.render("CallConsulting", {loggedIn: req.session.loggedIn, user: req.session.user});
};

const getReport = (req, res) => {
  res.render("report", {loggedIn: req.session.loggedIn, user: req.session.user});
};

const getAboutPage = (req, res) => {
  res.render("about", {loggedIn: req.session.loggedIn, user: req.session.user});
};

const getContactUsPage = (req, res) => {
  res.render("contactUs", {loggedIn: req.session.loggedIn, user: req.session.user});
};

const getStreamCoursePage = (req, res) => {
  res.render("streamCourses",{loggedIn: req.session.loggedIn, user: req.session.user} )
}

const getCalculator = (req, res) => {
  res.render("numerologyCalc",{loggedIn: req.session.loggedIn, user: req.session.user} )
}

const getUploadCoursePage = async (req, res) => {
  try {
    const users = await User.find();
    const courses = await Course.find().sort({ title: 1 });
    res.render("courseUpload",{users, courses})
  } catch (error) {
    res.send("Error rendering page");
  }
}

const addCalculatorUser = async (req, res) => {
  try {
    const { name, phone } = req.body;

    const newCalculatorUser = new CalculatorUser({
      name,
      phone,
    });

    await newCalculatorUser.save();


    res.redirect("/report");
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).send("An error occurred. Please try again later.");
  }
};


const getSignupPage = (req, res) => {
  res.render("signup");
}

const getSigninPage = (req, res) => {
  res.render("signin")
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "suppportsachinlohia@gmail.com",
    pass: "uvsi eosn ouja cvib",
  },
});

const sendContactEmail = (req, res) => {

  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "samarthmistry311@gmail.com", 
    subject: `Contact Us Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.render("contactUs", {
        message: "Error sending message. Please try again.",
      });
    } else {
      res.render("contactUs", { message: "Message sent successfully!" });
    }
  });
};

module.exports = {
  getIndexPage,
  getCoursesPage,
  getAboutPage,
  getContactUsPage,
  sendContactEmail,
  getSignupPage,
  getSigninPage,
  getCallConsultingPage,
  getUploadCoursePage,
  getStreamCoursePage,
  getCalculator,
  getReport,
  addCalculatorUser
};
