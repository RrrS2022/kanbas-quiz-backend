import db from "../Database/index.js";

function QuestionRoutes(app) {
    app.put("/api/quizzes/:quizId/questions/:questionId", (req, res) => {
      const { quizId, questionId } = req.params;
      const question = req.body;
      db.questions = db.questions.map((q) =>
        q._id === questionId ? { ...q, ...question } : q
      );
      res.sendStatus(204);
    });
  
    app.delete("/api/quizzes/:quizId", (req, res) => {
      const { quizId } = req.params;
      db.questions = db.questions.filter((q) => q._id !== quizId);
      res.sendStatus(200);
    });
  
    app.post("/api/quizzes/:quizId/questions", (req, res) => {
      const { quizId } = req.params;
      const newQuestion = {
        ...req.body,
        quiz: quizId,
        _id: new Date().getTime().toString(),
      };
      db.questions.push(newQuestion);
      res.send(newQuestion);
    });
  
    app.get("/api/quizzes/:quizId/questions", (req, res) => {
      const { quizId } = req.params;
      const questions = db.questions.filter((q) => q.quiz === quizId);
      res.send(questions);
    });
  }
  
export default QuestionRoutes;
  