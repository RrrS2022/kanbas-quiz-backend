import db from "../Database/index.js";

function QuestionRoutes(app) {
    app.put("/api/quizzes/:quizId", (req, res) => {
      const { quizId } = req.params;
      const questionIndex = db.questions.findIndex((q) => q._id === quizId);
      db.questions[questionIndex] = {
        ...db.questions[questionIndex],
        ...req.body,
      };
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
  