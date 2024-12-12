import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
import * as assignmentsDao from "../Assignments/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";
import * as quizzesDao from "../Quizzes/dao.js";
import * as questionsDao from "../Questions/dao.js";

export default function CourseRoutes(app) {
  
  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.send(courses);
  };

  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    const currentUser = req.session["currentUser"];
    if (currentUser) {
      await enrollmentsDao.enrollUserInCourse(currentUser._id, course._id);
    }
    res.json(course);

  };
  
  const updateCourse = async (req, res) => {
    const { courseId } = req.params;
    const courseUpdates = req.body;
    const status = await dao.updateCourse(courseId, courseUpdates);
    res.send(status);
  };

  const deleteCourse = async (req, res) => {
    const { courseId } = req.params;
    const status = await dao.deleteCourse(courseId);
    res.send(status);
  };

  const createModule = async (req, res) => {
    const { courseId } = req.params;
    const module = {
      ...req.body,
      course: courseId,
    };
    const newModule = await modulesDao.createModule(module);
    res.send(newModule);
  };
  
  const findModulesForCourse = async (req, res) => {
    const { courseId } = req.params;
    const modules = await modulesDao.findModulesForCourse(courseId);
    res.json(modules);
  };

  const createAssignment = async (req, res) => {
    const { courseId } = req.params;
    const assignment = {
      ...req.body,
      course: courseId,
    };
    const newAssignment = await assignmentsDao.createAssignment(assignment);
    res.send(newAssignment);
  };

  const findAssignmentsForCourse = async (req, res) => {
    const { courseId } = req.params;
    const assignments = await assignmentsDao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  };

  const createQuiz = async (req, res) => {
    const { courseId } = req.params;
    const quiz = {
      ...req.body,
      course: courseId,
    };
    const newQuiz = await quizzesDao.createQuiz(quiz);
    res.send(newQuiz);
  };

  const findQuizzesForCourse = async (req, res) => {
    const { courseId } = req.params;
    const quizzes = await quizzesDao.findQuizzesForCourse(courseId);
    res.json(quizzes);
  };

  const createQuestion = async (req, res) => {
    const { quizId } = req.params;
    const question = {
      ...req.body,
      quiz: quizId,
    };
    const newQuestion = await questionsDao.createQuestion(question);
    res.send(newQuestion);
  };

  const findQuestionsForQuiz = async (req, res) => {
    const { quizId } = req.params;
    const questions = await questionsDao.findQuestionsForQuiz(quizId);
    res.json(questions);
  };

  // Fetch questions based on level of difficulty
  const findQuestionsByDifficulty = async (req, res) => {
    const { difficulty } = req.params;
    const level = await questionsDao.findQuestionsByDifficulty(difficulty);
    res.json(level);
  };

  // Fetch questions based on type (i.e. 'Multiple Choice')
  const findQuestionsByType = async (req, res) => {
    const { types } = req.params;
    const type = await questionsDao.findQuestionsByType(types);
    res.json(type);
  };

  const enrollUserInCourse = async (req, res) => {
    const currentUser = req.session["currentUser"];
    const { courseId } = req.body;
    if (currentUser && courseId) {
      const enrollment = await enrollmentsDao.enrollUserInCourse(currentUser._id, courseId);
      res.json(enrollment);
    } else {
      res.status(400).send("Invalid request data");
    }
  };

  const unenrollUserInCourse = async (req, res) => {
    const currentUser = req.session["currentUser"];
    const { courseId } = req.body;
    if (currentUser && courseId) {
      await enrollmentsDao.unenrollUserInCourse(currentUser._id, courseId);
      res.sendStatus(204);
    } else {
      res.status(400).send("Invalid request data");
    }
  };

  const findUsersForCourse = async (req, res) => {
    const { cid } = req.params;
    const users = await enrollmentsDao.findUsersForCourse(cid);
    res.json(users);
  }; 

  app.get("/api/courses", findAllCourses);
  app.post("/api/courses", createCourse);
  app.put("/api/courses/:courseId", updateCourse);
  app.delete("/api/courses/:courseId", deleteCourse);
  app.post("/api/courses/:courseId/modules", createModule);
  app.get("/api/courses/:courseId/modules", findModulesForCourse);
  app.post("/api/courses/:courseId/assignments", createAssignment);
  app.get("/api/courses/:courseId/assignments", findAssignmentsForCourse);
  app.post("/api/courses/:courseId/quizzes", createQuiz);
  app.get("/api/courses/:courseId/quizzes", findQuizzesForCourse);
  app.post("/api/courses/:courseId/quizzes/:quizId/questions", createQuestion);
  app.get("/api/courses/:courseId/quizzes/:quizId/questions", findQuestionsForQuiz);
  app.get("/api/courses/:courseId/quizzes/:quizId/questions/:difficulty", findQuestionsByDifficulty);
  app.get("/api/courses/:courseId/quizzes/:quizId/questions/:type", findQuestionsByType);
  app.post("/api/courses/:courseId/enrollments", enrollUserInCourse);
  app.delete("/api/courses/:courseId/enrollments", unenrollUserInCourse);
  app.get("/api/courses/:cid/users", findUsersForCourse);
}