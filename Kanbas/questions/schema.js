import mongoose from "mongoose";

// const MCChoicesSchema = new mongoose.Schema({
//     options: [{ text: String, isCorrect: Boolean }],
//   }, {_id: false});

// const TFChoicesSchema = new mongoose.Schema({
//     options: [{ text: String, isTrue: Boolean }],
//   }, {_id: false});

// const BLANKSChoicesSchema = new mongoose.Schema({
//     blanks: [{ text: String }],
//   }, {_id: false});

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
    choices: {
      options: [{ text: String, isCorrect: Boolean }],
    },
  },
  { collection: "questions" }
);
export default questionSchema;
