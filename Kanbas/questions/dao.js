import questionModel from "./model.js";
export const createQuestion = (question) => {
    return questionModel.create(question);
}
export const findQuestionsForQuiz = (quizId) => 
    questionModel.find({ quiz: quizId });
export const updateQuestion = (questionId, question) => 
    questionModel.updateOne({ _id: questionId }, { $set: question });
export const deleteQuestion = (questionId) => 
    questionModel.deleteOne({ _id: questionId });
export const findQuestionById = (questionId) => 
    questionModel.find({questionId});



