import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from "./Kanbas/assignments/routes.js";
import QuizRoutes from "./Kanbas/quizzes/routes.js";
import QuestionRoutes from "./Kanbas/questions/routes.js";
import mongoose from "mongoose";

import cors from "cors";
mongoose.connect("mongodb://127.0.0.1:27017/kanbas-quiz");

const app = express();
app.use(cors());
app.use(express.json());

ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
QuizRoutes(app);
QuestionRoutes(app);
Hello(app);
Lab5(app);
app.listen(4100);
