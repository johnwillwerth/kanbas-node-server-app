import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
import * as assignmentsDao from "../Assignments/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";

export default function CourseRoutes(app) {
  
  const findAllCourses = (req, res) => {
    const courses = dao.findAllCourses();
    res.send(courses);
  };
  
  const updateCourse = (req, res) => {
    const { courseId } = req.params;
    const courseUpdates = req.body;
    dao.updateCourse(courseId, courseUpdates);
    res.sendStatus(204);
  };

  const deleteCourse = (req, res) => {
    const { courseId } = req.params;
    dao.deleteCourse(courseId);
    res.sendStatus(204);
  };

  const createModule = (req, res) => {
    const { courseId } = req.params;
    const module = {
      ...req.body,
      course: courseId,
    };
    const newModule = modulesDao.createModule(module);
    res.send(newModule);
  };
  
  const findModulesForCourse = (req, res) => {
    const { courseId } = req.params;
    const modules = modulesDao.findModulesForCourse(courseId);
    res.json(modules);
  };

  const createAssignment = (req, res) => {
    const { courseId } = req.params;
    const assignment = {
      ...req.body,
      course: courseId,
    };
    const newAssignment = assignmentsDao.createAssignment(assignment);
    res.send(newAssignment);
  };

  const findAssignmentsForCourse = (req, res) => {
    const { courseId } = req.params;
    const assignments = assignmentsDao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  }

  const enrollUserInCourse = (req, res) => {
    const currentUser = req.session["currentUser"];
    const { courseId } = req.body;
    if (currentUser && courseId) {
      const enrollment = enrollmentsDao.enrollUserInCourse(currentUser._id, courseId);
      res.json(enrollment);
    } else {
      res.status(400).send("Invalid request data");
    }
  };

  const unenrollUserInCourse = (req, res) => {
    const currentUser = req.session["currentUser"];
    const { courseId } = req.body;
    if (currentUser && courseId) {
      enrollmentsDao.unenrollUserInCourse(currentUser._id, courseId);
      res.sendStatus(204);
    } else {
      res.status(400).send("Invalid request data");
    }
  };

  app.get("/api/courses", findAllCourses);
  app.put("/api/courses/:courseId", updateCourse);
  app.delete("/api/courses/:courseId", deleteCourse);
  app.post("/api/courses/:courseId/modules", createModule);
  app.get("/api/courses/:courseId/modules", findModulesForCourse);
  app.post("/api/courses/:courseId/assignments", createAssignment);
  app.get("/api/courses/:courseId/assignments", findAssignmentsForCourse);
  app.put("/api/courses/:courseId/enrollments", enrollUserInCourse);
  app.delete("/api/courses/:courseId/enrollments", unenrollUserInCourse);
}