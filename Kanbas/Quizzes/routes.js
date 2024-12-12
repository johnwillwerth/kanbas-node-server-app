import * as quizzesDao from "./dao.js";
import * as questionsDao from "../Questions/dao.js";

export default function QuizRoutes(app) {
  
  // Update a quiz
  const updateQuiz = async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
    res.send(status);
  };

  // Delete a quiz
  const deleteQuiz = async (req, res) => {
    const { quizId } = req.params;
    const status = await quizzesDao.deleteQuiz(quizId);
    res.send(status);
  };

  app.put("/api/quizzes/:quizId", updateQuiz);
  app.delete("/api/quizzes/:quizId", deleteQuiz);
  
}