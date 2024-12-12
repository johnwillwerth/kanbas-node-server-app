import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
 {

    title: String,

    course: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "CourseModel", 
    },

    type: {
      type: String,
      enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
      default: "Graded Quiz",
    },

    description: String,

    points: Number,

    group: {
      type: String,
      enum: ["Quizzes", "Exams", "Assignments", "Project"],
      default: "Quizzes",
    },

    shuffle: {
      type: Boolean,
      enum: [true, false],
      default: true,
    },

    timeLimit: {
      type: Number,
      default: 20,
    },

    multipleAttempts: {
      type: Boolean,
      enum: [true, false],
      default: false,
    },

    allowedAttempts: {
      type: Number,
      default: 1,
    },

    showAnswers: {
      type: String,
      enum: ["Immediately", "After Due Date", "Never"],
      default: "After Due Date",
    },

    accessCode: {
      type: String,
      default: "",
    },

    oneQuestion: {
      type: Boolean,
      enum: [true, false],
      default: true,
    },

    webcam: {
      type: Boolean,
      enum: [true, false],
      default: false,
    },

    lockQuestions: {
      type: Boolean,
      enum: [true, false],
      default: false,
    },
    
    dueDate: Date,
    availDate: Date,
    untilDate: Date,    
 },
 { collection: "quizzes" }
);
export default quizSchema;