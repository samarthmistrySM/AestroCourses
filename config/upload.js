const multer = require('multer');
const path = require('path');

const fileFilter = (req, file, cb) => {
  const imageTypes = /jpeg|jpg|png/;
  const videoTypes = /mp4|avi|mkv/;

  if (file.mimetype.startsWith('image') && imageTypes.test(path.extname(file.originalname).toLowerCase())) {
    return cb(null, true); 
  } else if (file.mimetype.startsWith('video') && videoTypes.test(path.extname(file.originalname).toLowerCase())) {
    return cb(null, true); 
  } else {
    cb(new Error('Invalid file type. Only images (jpeg, jpg, png) and videos (mp4, avi, mkv) are allowed.'));
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = file.mimetype.startsWith('image') ? 'public/imgs/thumbnails' : 'public/videos/courses';
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const uniqueSuffix = `${timestamp}-${Math.round(Math.random() * 1E9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
  }
});

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;