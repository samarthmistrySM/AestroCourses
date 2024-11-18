const express = require("express");
const pagesRouter = express.Router();

const {
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
} = require("../controllers/pagesController");

pagesRouter.get("/", getIndexPage);
pagesRouter.get("/courses", getCoursesPage);
pagesRouter.get("/about", getAboutPage);
pagesRouter.get("/contact-us", getContactUsPage);
pagesRouter.get('/signup',getSignupPage)
pagesRouter.get('/signin',getSigninPage)
pagesRouter.get('/call-consulting',getCallConsultingPage)
pagesRouter.get('/stream',getStreamCoursePage)
pagesRouter.get('/calc',getCalculator)
pagesRouter.get('/admin/course',getUploadCoursePage)
pagesRouter.get('/report',getReport)
pagesRouter.post('/usedCalculator',addCalculatorUser)

pagesRouter.post("/contact-us", sendContactEmail);

module.exports = pagesRouter;