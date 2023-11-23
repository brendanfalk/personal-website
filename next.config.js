

module.exports = {
  async rewrites() {
    return [
      {
        source: "/quizmaster",
        destination: "https://chat.openai.com/g/g-JL0Vjp0DR-quizmastergpt",
      },
      {
        source: "/QuizMaster",
        destination: "https://chat.openai.com/g/g-JL0Vjp0DR-quizmastergpt",
      },
      {
        source: "/quizMaster",
        destination: "https://chat.openai.com/g/g-JL0Vjp0DR-quizmastergpt",
      },
      {
        source: "/quiz",
        destination: "https://chat.openai.com/g/g-JL0Vjp0DR-quizmastergpt",
      },
   ];
  },
};


  