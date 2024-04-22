import model from "./model.js";

//CURD
export const createQuiz = (quiz) => {
    //delete quiz._id;
    return model.create(quiz);
};
export const findAllQuizzes = (courseId) => model.find({ course: courseId });
export const findQuizById = (id) => model.findById(id);
export const findQuizByName = (quizName) => model.findOne({quizName});
export const updateQuiz = (id, quiz) =>
    model.updateOne({ _id: id }, { $set: quiz });
export const deleteQuiz = (id) => model.deleteOne({ _id: id });