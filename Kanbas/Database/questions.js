export default [
  {
    _id: "M101",
    quiz: "Q101",
    questionType: "MC",
    title: "Question 1",
    points: 10,
    question: "How much is 2 + 2?",
    choices: [
      {
        text: "A. 4",
        isCorrect: true,
      },
      {
        text: "B. 5",
        isCorrect: false,
      },
      {
        text: "C. 6",
        isCorrect: false,
      },
    ],
  },
  {
    _id: "B101",
    quiz: "Q101",
    questionType: "BLANKS",
    title: "Question 2",
    points: 10,
    question: "2 + 2 = ",
    choices: [
      {
        options: [
          {
            text: "4",
            isCorrect: true,
          },
        ],
      },
    ],
  },
  {
    _id: "T101",
    quiz: "Q101",
    questionType: "TF",
    title: "Question 3",
    points: 10,
    question: "2 + 2 = ",
    choices: [
      {
        options: [
          {
            text: "4",
            isCorrect: true,
          },
          {
            text: "5",
            isCorrect: false,
          },
        ],
      },
    ],
  },
];
