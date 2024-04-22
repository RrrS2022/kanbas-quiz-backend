import model from "./model.js";

//CURD
export const createQuiz = (quiz) => {
    //delete quiz._id;
    return model.create(quiz);
};
export const findAllQuizzes = () => model.find();
export const findQuizById = (id) => model.find({_id: id});
export const findQuizByName = (quizName) => model.findOne({quizName});
export const updateQuiz = (id, quiz) =>
    model.updateOne({ _id: id }, { $set: quiz });
export const deleteQuiz = (id) => model.deleteOne({ _id: id });