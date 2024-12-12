import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
 {
   title: String,
   course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
   group: String,
   description: String,
   points: Number,
   displayGradeAs: String,
   submissionType: String,
   entryOptions: String,
   assignTo: String,
   availDate: Date,
   dueDate: Date,
   availUntilDate: Date,
 },
 { collection: "assignments" }
);
export default assignmentSchema;