import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {

  const enrollUserInCourse = (req, res) => {
    const currentUser = req.session["currentUser"];
    const { courseId } = req.body; // Pass courseId in the request body
    if (currentUser && courseId) {
      const enrollment = dao.enrollUserInCourse(currentUser._id, courseId);
      res.json(enrollment);
    } else {
      res.status(400).send("Invalid request data");
    }
  };

  const unenrollUserInCourse = (req, res) => {
    const currentUser = req.session["currentUser"];
    const { courseId } = req.body; // Pass courseId in the request body
    if (currentUser && courseId) {
      dao.unenrollUserInCourse(currentUser._id, courseId);
      res.sendStatus(204);
    } else {
      res.status(400).send("Invalid request data");
    }
  };

  app.put("/api/enrollments", enrollUserInCourse);
  app.delete("/api/enrollments", unenrollUserInCourse);
}