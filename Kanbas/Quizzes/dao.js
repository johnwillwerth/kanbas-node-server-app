import model from "./model.js";

export function findQuizzesForCourse(courseId) {
  return model.find({ course: courseId });
};

export function findQuizById(quizId) {
  return model.findById(quizId)
};

export function createQuiz(quiz) {
  return model.create(quiz);
};

export function updateQuiz(quizId, quizUpdates) {
  return model.updateOne({ _id: quizId }, quizUpdates);
};

export function deleteQuiz(quizId) {
  return model.deleteOne({ _id: quizId });
};