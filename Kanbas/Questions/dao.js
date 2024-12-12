import model from "./model.js";

// Fetch all questions for a specific quiz
export function findQuestionsForQuiz(quizId) {
  return model.find({ quiz: quizId });
};

// Fetch questions by difficulty
export function findQuestionsByDifficulty(difficulty) {
  return model.find({ difficulty });
};

// Fetch questions by type
export function findQuestionsByType(type) {
  return model.find({ type });
};

// Create a new question
export function createQuestion(question) {
  delete question._id
  return model.create(question);
};

// Update an existing question
export function updateQuestion(questionId, questionUpdates) {
  return model.updateOne(questionId, questionUpdates);
};

// Delete a question
export function deleteQuestion(questionId) {
  return model.deleteOne({ _id: questionId });
};