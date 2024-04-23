// import db from "../Database/index.js";

// function QuestionRoutes(app) {
//     app.put("/api/quizzes/:quizId/questions/:questionId", (req, res) => {
//       const { quizId, questionId } = req.params;
//       const question = req.body;
//       db.questions = db.questions.map((q) =>
//         q._id === questionId ? { ...q, ...question } : q
//       );
//       res.sendStatus(204);
//     });

//     app.delete("/api/quizzes/:quizId", (req, res) => {
//       const { quizId } = req.params;
//       db.questions = db.questions.filter((q) => q._id !== quizId);
//       res.sendStatus(200);
//     });

//     app.post("/api/quizzes/:quizId/questions", (req, res) => {
//       const { quizId } = req.params;
//       const newQuestion = {
//         ...req.body,
//         quiz: quizId,
//         _id: new Date().getTime().toString(),
//       };
//       db.questions.push(newQuestion);
//       res.send(newQuestion);
//     });

//     app.get("/api/quizzes/:quizId/questions", (req, res) => {
//       const { quizId } = req.params;
//       const questions = db.questions.filter((q) => q.quiz === quizId);
//       res.send(questions);
//     });
//   }

// export default QuestionRoutes;

import * as dao from "./dao.js"

export default function QuestionRoutes(app) {

  const findQuestionsForQuiz = async (req, res) => {
    const {quizId} = req.params;
    const status = await dao.findQuestionsForQuiz(quizId);
    res.json(status);
};

  const findQuestionById = async (req, res) => {
    const {quizId, questionId} = req.params;
    const status = await dao.findQuestionsForQuiz(questionId);
    res.json(status);
  };

  const createQuestion = async (req, res) => {
    const { quizId } = req.params;
    const newQuestion = { ...req.body, quiz: quizId, _id: new Date().getTime().toString() };
    const status = await dao.createQuestion(newQuestion);
    res.json(status);
};


  const updateQuestion = async (req, res) => {
    const { quizId, questionId} = req.params;
    const status = await dao.updateQuestion(questionId, req.body);
    res.json(status);
  };


  const deleteQuestion = async (req, res) => {
    const {quizId} = req.params;
    const status = await dao.deleteQuestion(quizId);
    res.json(status);
  };

  app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz);
  app.get("/api/quizzes/:quizId/questions/:questionId", findQuestionById);
  app.post("/api/quizzes/:quizId/questions", createQuestion);
  app.put("/api/quizzes/:quizId/questions/:questionId", updateQuestion);
  app.delete("/api/quizzes/:quizId", deleteQuestion);

}

