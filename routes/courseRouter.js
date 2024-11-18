const express = require("express");
const courseRouter = express.Router();

const upload = require("../config/upload");

const {
  grantAccess,
  uploadCourse,
} = require("../controllers/courseController");

courseRouter.post(
    "/upload",upload.fields([
      { name: 'thumbnail', maxCount: 1 },  
      { name: 'video', maxCount: 1 }       
    ]),
    uploadCourse
  );

courseRouter.post("/grantaccess", grantAccess);

module.exports = courseRouter;