import mongoose from "mongoose";


const questionSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true, unique: true },
    quiz: { type: String, required: true },
    questionType: {
      type: String,
      enum: ["MC", "BLANKS", "TF"],
      default: "MC",
      required: true,
    },
    title: { type: String },
    points: { type: Number },
    question: { type: String },
    options: [{ type: String }],
    answers : { type: String }
  },
  { collection: "questions" }
);
export default questionSchema;
