import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    courseId: {type: String, required: true},
    quizName: {type: String, required: true},
    quizType: {
        type: String,
        enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
        required:true,
        default: "Graded Quiz"},
    points: {type: Number, required: true},
    assignmentGroup: {type: String, 
        enum: ["Quizzes", "Exams", "Assignments", "Project"],
        default: "Quizzes"},
    shuffleAnswers: {type: Boolean, default: true},
    timeLimit: {type: Number, default: 20},
    mutipleAttempts: {type: Boolean, default: false},
    showCorrectAnwers: {type: Boolean},
    accessCode: {type: String},
    oneQuestionataTime: {type: Boolean, default: true},
    webcamRequired: {type: Boolean, default: false},
    lockQuestionAfterAnswering: {type: Boolean, default: false},
    dueDate: {type: Date},
    availableDate: {type: Date},
    untilDate: {type: Date},
  },
  { collection: "quizzes" });
export default quizSchema;
