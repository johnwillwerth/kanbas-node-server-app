import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    // Question title or description
    title: {
      type: String,
    },

    // Associated Quiz
    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "QuizModel",
    },

    // Type of question
    type: {
      type: String,
      enum: ["Multiple Choice", "True/False", "Fill in the Blank"],
      default: "Multiple Choice",
    },

    // Main question text
    questionDescription: {
      type: String,
      default: "",
    },

    // Points awarded for the question
    points: {
      type: Number,
      default: 2,
    },

    // Choices for "Multiple Choice" type questions
    choices: {
      type: [String], // Array of strings
      validate: {
        validator: function (value) {
          // For True/False, ensure choices are ["True", "False"]
          if (this.type === "True/False") {
            return this.choices = ["True", "False"];
          } else {
            // For Multiple Choice, ensure all choices are non-empty strings
            return value;
          }
        },
      },
    },

    // Answer for the question
    answer: {
      type: String,
      validate: {
        validator: function (answer) {
          return this.choices.includes(answer);
        }
      }
    },

    // Difficulty level (Optional)
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Medium",
    },
  },
  { collection: "questions" }
);

export default questionSchema;
