import mongoose from "mongoose";
const enrollmentSchema = new mongoose.Schema(
 {
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    user:   { type: mongoose.Schema.Types.ObjectId, ref: "UserModel"   },
    grade: {type: Number, default: 100},
    letterGrade: {type: String, default: "A"},
    enrollmentDate: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ["ENROLLED", "DROPPED", "COMPLETED"],
      default: "ENROLLED",
    },
  },
 { collection: "enrollments" }
);
export default enrollmentSchema;