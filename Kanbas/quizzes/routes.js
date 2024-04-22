import * as dao from "./dao.js"
// import db from "../Database/index.js";
// function QuizRoutes(app) {
//   app.put("/api/quizzes/:quiz", (req, res) => {
//     const { quiz } = req.params;
//     const quizIndex = db.quizzes.findIndex(
//       (m) => m._id === quiz);
//     db.quizzes[quizIndex] = {
//       ...db.quizzes[quizIndex],
//       ...req.body
//     };
//     res.sendStatus(204);
//   });
  
//   app.delete("/api/quizzes/:quiz", (req, res) => {
//     const { quiz } = req.params;
//     db.quizzes = db.quizzes.filter((m) => m._id !== quiz);
//     res.sendStatus(200);
//   });

//   app.post("/api/courses/:course/quizzes", (req, res) => {
//     const { course } = req.params;
//     const newQuiz = {
//       ...req.body,
//       course: course,
//       _id: new Date().getTime().toString(),
//     };
//     db.quizzes.push(newQuiz);
//     res.send(newQuiz);
//   });

//   app.get("/api/courses/:course/quizzes", (req, res) => {
//     const { course } = req.params;
//     const quizzes = db.quizzes.filter((m) => m.course === course);
//     res.send(quizzes);
//   });

//   app.get("/api/quizzes/:quizId", (req, res) => {
//     const { quizId } = req.params;
//     const quiz = db.quizzes.find((quiz) => quiz._id === quizId);
//     if (!quiz) {
//       return res.status(404).send({ error: 'Quiz not found' });
//     }
//     res.send(quiz);
//   });
// }
// export default QuizRoutes;


export default function QuizRoutes(app) {
  const findQuizById = async (req, res) => {
    const { quizId } = req.params;
    const quiz = await dao.findQuizById(quizId);
    res.json(quiz);
  };

  const findQuizzesForCourse = async (req, res) => {
    const {courseId} = req.params;
    const quizzes = await dao.findAllQuizzes(courseId);
    res.json(quizzes);
  };

  const createQuiz = async (req, res) => {
    const {courseId} = req.params;
    const newQuiz = await dao.createQuiz({...req.body, course: courseId});
    const quiz = await dao.createQuiz(newQuiz);
    res.json(quiz);
  };

  const updateQuiz = async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.updateQuiz(quizId, req.body);
    res.json(status);
  };

  const deleteQuiz = async (req, res) => {
    const {quizId} = req.params;
    const status = await dao.deleteQuiz(quizId);
    res.json(status);
  };

  app.get("/api/quizzes/:quizId", findQuizById);
  app.get("/api/courses/:course/quizzes", findQuizzesForCourse);
  app.post("/api/courses/:course/quizzes", createQuiz);
  app.put("/api/quizzes/:quiz", updateQuiz);
  app.delete("/api/quizzes/:quiz", deleteQuiz);
}
