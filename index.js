import "dotenv/config";
import express from 'express';
import mongoose from 'mongoose';
import Hello from "./Hello.js"; 
import Lab5 from "./Lab5/index.js"; 
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import EnrollmentRoutes from "./Kanbas/Enrollments/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import QuizRoutes from "./Kanbas/Quizzes/routes.js";
import session from 'express-session';                          // import new server session library

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);
const app = express()                                           // create new express instance
app.use(
  cors({                                                        // configure cors first
    credentials: true,                                          // support cookies
    origin: process.env.NETLIFY_URL || "http://localhost:3000", // use different front end URL in dev
  })                                                            // and in production
);

app.use(express.json());

const sessionOptions = {                                        // default session options
  secret: process.env.SESSION_SECRET || "kanbas",       
  resave: false,                                       
  saveUninitialized: false,                                  
};

if (process.env.NODE_ENV !== "development") {                   // in production
  sessionOptions.proxy = true;                                  // turn on proxy support
  sessionOptions.cookie = {                                     // configure cookies for remote server
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
{/*  
if (process.env.NODE_ENV !== "development") {                   // in production
  sessionOptions.proxy = true;                                  // turn on proxy support
  sessionOptions.cookie = {                                     // configure cookies for remote server
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
  */} 
}

app.use(session(sessionOptions));

UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
EnrollmentRoutes(app);
AssignmentRoutes(app);
QuizRoutes(app);
Lab5(app);                                                      // pass reference to express module
Hello(app);                                                     // pass app reference to Hello

app.listen(process.env.PORT || 4000)                            // listen to http://localhost:4000
