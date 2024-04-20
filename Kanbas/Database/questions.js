export default [
  {
    _id: "M101",
    quiz: "Q101",
    type: "MC",
    title: "Question 1",
    points: 10,
    question: "How much is 2 + 2?",
    choice: [
      {
        option1: "A",
        option2: "B",
        option3: "C",
      },
    ],
  },
  {
    _id: "B101",
    quiz: "Q101",
    type: "BLANKS",
    title: "Question 2",
    points: 10,
    question: "2 + 2 = ",
    choice: [
      {
        blank1: "4",
      },
    ],
  },
  {
    _id: "T101",
    quiz: "Q101",
    type: "TF",
    title: "Question 3",
    points: 10,
    question: "2 + 2 = ",
    choice: [
      {
        true: "4",
        false: "5",
      },
    ],
  },
];
