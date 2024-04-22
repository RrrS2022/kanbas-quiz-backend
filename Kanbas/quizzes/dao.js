import quizModel from "./model";

//CURD
export const createQuiz = (quiz) => {
    //delete quiz._id;
    return quizModel.create(course);
};
export const findAllQuizzes = () => quizModel.find();
export const findQuizById = (quizId) => quizModel.findById(quizId);
export const findQuizByName = (quizName) => quizModel.findOne({quizName});
export const updateQuiz = (id, quiz) =>
    quizModel.updateOne({ _id: id }, { $set: quiz });
export const deleteQuiz = (id) => quizModel.deleteOne({ _id: id });