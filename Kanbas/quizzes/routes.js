import * as dao from "./dao.js"

export default function QuizRoutes(app) {
  
  const findQuizById = async (req, res) => {
    const quiz = await dao.findQuizById(req.params.quizId);
    res.json(quiz);
};

  const findQuizzesForCourse = async (req, res) => {
    const {courseId} = req.params;
    const quizzes = await dao.findAllQuizzes(courseId);
    res.json(quizzes);
  };

  const createQuiz = async (req, res) => {
    const { courseId } = req.params;
    const newQuiz = { ...req.body, course: courseId };
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

  app.get("/api/courses/:courseId/quizzes/:quizId", findQuizById);
  app.get("/api/courses/:courseId/quizzes", findQuizzesForCourse);
  app.post("/api/courses/:courseId/quizzes", createQuiz);
  app.put("/api/quizzes/:quizId", updateQuiz);
  app.delete("/api/quizzes/:quizId", deleteQuiz);
  
}
