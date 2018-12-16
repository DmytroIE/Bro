const INITIAL_NUMBER_OF_QUESTION_AT_START = 1;

const prepareForANewTest = receivedTestObject => {
  const preparedQuestions = receivedTestObject.questions.map(question => {
    // Формируем коды от A до Z согласно длине массива
    const letters = question.options.map((option, idx) =>
      String.fromCharCode(65 + (idx % 26)),
    );
    // %-защита на случай, если опций будет больше 26. В принципе, это нереально,
    // но, может произойти вследствие ошибки при разработке. При таком подходе литерация заглавными
    // буквами просто пойдет сначала по второму, третьему и т.д. кругу

    // Переназначаем буквы вариантам ответа
    const tempOptionsArray = [...question.options];

    const preparedOptions = letters.map(letter => {
      const randomIndex = Math.floor(Math.random() * tempOptionsArray.length);
      const preparedOption = {
        ...tempOptionsArray[randomIndex],
        letter,
        isChosen: false,
      };
      tempOptionsArray.splice(randomIndex, 1);

      return preparedOption;
    });

    const preparedQuestion = {
      ...question,
      options: preparedOptions,
      answer: null,
    };
    return preparedQuestion;
  });

  return {
    ...receivedTestObject,
    questions: preparedQuestions,
    numberOfCurrentQuestion: INITIAL_NUMBER_OF_QUESTION_AT_START,
    numberOfQuestions: receivedTestObject.questions.length,
    remainingTime:
      receivedTestObject.questions[INITIAL_NUMBER_OF_QUESTION_AT_START - 1]
        .timeToSolve,
    isTestFinished: false,
  };
};

export default prepareForANewTest;
