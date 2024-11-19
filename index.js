const express = require("express");
const cors = require("cors");
const session = require("express-session");
const path = require("path");
const https = require("https");
const fs = require("fs");

const connectDbs = require("./config/connectDb");

const pageRouter = require("./routes/pagesRouter");
const authRouter = require("./routes/authRouter");
const coursesRouter = require("./routes/courseRouter");

const app = express();

// SSL Options: Provide paths to your certificate and private key
const options = {
  key: fs.readFileSync("./key.pem"), // Replace with your private key path
  cert: fs.readFileSync("./cert.pem"), // Replace with your certificate path
};

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "shhhhhh",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }, // Secure cookies when using HTTPS
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", pageRouter);
app.use("/auth", authRouter);
app.use("/courses", coursesRouter);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDbs("mongodb+srv://avox:avox@cluster0.uufq4.mongodb.net/SachinLohia");

    // Start HTTPS server
    https.createServer(options, app).listen(PORT, () => {
      console.log(`HTTPS Server is running on https://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error.message);
    process.exit(1);
  }
};

startServer();
