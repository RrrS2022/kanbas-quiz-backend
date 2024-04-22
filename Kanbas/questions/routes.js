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
  

import * as questionDao from "./dao.js";

function QuestionRoutes(app) {
    app.put("/api/quizzes/:quizId/questions/:questionId", async (req, res) => {
        const { quizId, questionId } = req.params;
        const question = req.body;
        try {
            await questionDao.updateQuestion(questionId, question);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    app.delete("/api/quizzes/:quizId/questions/:questionId", async (req, res) => {
        const { questionId } = req.params;
        try {
            await questionDao.deleteQuestion(questionId);
            res.sendStatus(200);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    app.post("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        const newQuestion = { ...req.body, quiz: quizId };
        try {
            const createdQuestion = await questionDao.createQuestion(newQuestion);
            res.status(201).send(createdQuestion);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    app.get("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        try {
            const questions = await questionDao.findQuestionsForQuiz(quizId);
            res.send(questions);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
    
    app.get("/api/questions/:questionId", async (req, res) => {
      const { questionId } = req.params;
      try {
          const question = await questionDao.findQuestionById(questionId);
          if (!question) {
              return res.status(404).send({ error: 'Question not found' });
          }
          res.send(question);
      } catch (error) {
          res.status(500).json({ error: error.message });
      }
  });
}

export default QuestionRoutes;
