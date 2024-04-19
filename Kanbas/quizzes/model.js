import mongoose from "mongoose";
import quizSchema from "./schema";

const quizModel = mongoose.model("Quiz", quizSchema);
export default quizModel;