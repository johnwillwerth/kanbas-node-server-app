import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
 {
   title: String,
   course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
   group: String,
   description: String,
   points: Number,
   availDate: Date,
   dueDate: Date,
 },
 { collection: "assignments" }
);
export default assignmentSchema;