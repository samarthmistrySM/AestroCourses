const Course = require("../models/CourseModel");
const User = require("../models/UserModel")

const uploadCourse = async (req, res) => {
  try {
    const { title, description, price, purchaseLink } = req.body;

    const videoUrl = `/videos/courses/${req.files.video[0].filename}`;
    const thumbnailUrl = `/imgs/thumbnails/${req.files.thumbnail[0].filename}`;

    console.log(req.files);

    const newCourse = new Course({
      title,
      description,
      purchaseLink,
      videoUrl,
      thumbnailUrl,
      price,
    });

    

    await newCourse.save();
    const users = await User.find();
    const courses = await Course.find().sort({ title: 1 });
    res.render("courseUpload" ,{users, courses,message: 'Course Added'})
  } catch (error) {
    const users = await User.find();
    const courses = await Course.find().sort({ title: 1 });
    res.render("courseUpload" ,{users, courses,message: 'Error Uploading Course'})
  }
};

const grantAccess = async (req, res) => {
  try {
    const accessData = req.body; 
    const userAccessMap = {};

    for (const key in accessData) {
      if (key.startsWith('access[')) {
        const userId = key.split('[')[1].split(']')[0]; 
        let selectedCourseIds = accessData[key]; 

        if (!Array.isArray(selectedCourseIds)) {
          selectedCourseIds = selectedCourseIds ? [selectedCourseIds] : [];
        }

        if (!userAccessMap[userId]) {
          userAccessMap[userId] = { add: [], remove: [] };
        }

        const existingCourses = accessData.existingCourses && accessData.existingCourses[userId]
          ? accessData.existingCourses[userId][0].split(',')
          : [];

        // Mark courses for removal that are not selected anymore
        existingCourses.forEach(courseId => {
          if (!selectedCourseIds.includes(courseId)) {
            userAccessMap[userId].remove.push(courseId);
          }
        });

        selectedCourseIds.forEach(courseId => {
          if (!existingCourses.includes(courseId)) {
            userAccessMap[userId].add.push(courseId);
          }
        });
      }
    }

    const updatePromises = Object.keys(userAccessMap).map(async userId => {
      const { add, remove } = userAccessMap[userId];
      const currentUser = await User.findById(userId);

      const updatedCourses = [
        ...new Set([
          ...currentUser.courses, 
          ...add.filter(courseId => !currentUser.courses.includes(courseId))
        ].filter(courseId => !remove.includes(courseId)))
      ];

      return User.findByIdAndUpdate(userId, { courses: updatedCourses }, { new: true });
    });

    await Promise.all(updatePromises);

    if(req.session.user){
      const user = User.findById(req.session.user._id);
      user.courses.sort((a, b) => a.title.localeCompare(b.title));
      req.session.user = user;
    }

    const users = await User.find();
    const courses = await Course.find().sort({ title: 1 });
    res.render("courseUpload" ,{users, courses,message: 'User Updated'})
  } catch (error) {
    console.error('Error updating user access:', error);
    const users = await User.find();
    const courses = await Course.find().sort({ title: 1 });
    res.render("courseUpload" ,{users, courses,message: 'Error User Updating'})
  }
};






module.exports = {
    uploadCourse,
    grantAccess
}