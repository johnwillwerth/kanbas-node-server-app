import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    lessons: [],
  },
  { collection: "modules" }
);
export default moduleSchema;