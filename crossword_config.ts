export const crosswordConfig = {
  adFields: [
    {
      width: {
        start: {
          x: 4,
          y: 3,
        },
        end: {
          x: 8,
          y: 3,
        },
      },
    },
    {
      height: {
        start: {
          x: 4,
          y: 3,
        },
        end: {
          x: 4,
          y: 12,
        },
      },
    },
  ],
  amountOfQuestions: 54,
  fields: [
    {
      id: "Question-1",
      question: {
        position: {
          x: 0,
          y: 0,
        },
        direction: "right-down",
        value: "",
      },
      answer: {
        value: "",
        charCount: 11,
        direction: "vertical",
        start: {
          x: 1,
          y: 0,
        },
        end: {
          x: 1,
          y: 10,
        },
        partOfSolution: false,
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-12",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 1,
              y: 1,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-13",
          overlappingChar: {
            positionOfCharInWord: 1,
            overlappingField: {
              x: 1,
              y: 2,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-16",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 1,
              y: 3,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-18",
          overlappingChar: {
            positionOfCharInWord: 1,
            overlappingField: {
              x: 1,
              y: 5,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-22",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 1,
              y: 6,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-23",
          overlappingChar: {
            positionOfCharInWord: 1,
            overlappingField: {
              x: 1,
              y: 7,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-28",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 1,
              y: 8,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-29",
          overlappingChar: {
            positionOfCharInWord: 1,
            overlappingField: {
              x: 1,
              y: 9,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-32",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 1,
              y: 10,
            },
            char: "",
          },
        },
      ],
    },
    {
      id: "Question-2",
      question: {
        position: {
          x: 2,
          y: 0,
        },
        direction: "down",
        value: "",
      },
      answer: {
        value: "",
        charCount: 3,
        direction: "vertical",
        start: {
          x: 2,
          y: 1,
        },
        end: {
          x: 2,
          y: 3,
        },
        partOfSolution: false,
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-12",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 2,
              y: 1,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-13",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 2,
              y: 2,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-16",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 2,
              y: 4,
            },
            char: "",
          },
        },
      ],
    },
    {
      id: "Question-3",
      question: {
        position: {
          x: 2,
          y: 0,
        },
        direction: "right-down",
        value: "",
      },
      answer: {
        value: "---H--",
        charCount: 6,
        direction: "vertical",
        start: {
          x: 3,
          y: 0,
        },
        end: {
          x: 3,
          y: 5,
        },
        partOfSolution: [
          {
            positionInAnswer: 4,
            positionInSolution: 7,
            char: "H",
          },
        ],
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-12",
          overlappingChar: {
            positionOfCharInWord: 4,
            overlappingField: {
              x: 3,
              y: 1,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-13",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 3,
              y: 2,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-16",
          overlappingChar: {
            positionOfCharInWord: 4,
            overlappingField: {
              x: 3,
              y: 3,
            },
            char: "H",
          },
        },
        {
          overlappingQuestionFieldId: "Question-18",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 3,
              y: 5,
            },
            char: "",
          },
        },
      ],
    },
    {
      id: "Question-4",
      question: {
        position: {
          x: 4,
          y: 0,
        },
        direction: "down",
        value: "",
      },
      answer: {
        value: "",
        charCount: 2,
        direction: "vertical",
        start: {
          x: 4,
          y: 1,
        },
        end: {
          x: 4,
          y: 2,
        },
        partOfSolution: false,
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-12",
          overlappingChar: {
            positionOfCharInWord: 5,
            overlappingField: {
              x: 4,
              y: 1,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-13",
          overlappingChar: {
            positionOfCharInWord: 4,
            overlappingField: {
              x: 4,
              y: 2,
            },
            char: "",
          },
        },
      ],
    },
    {
      id: "Question-5",
      question: {
        position: {
          x: 4,
          y: 0,
        },
        direction: "right-down",
        value: "",
      },
      answer: {
        value: "--T",
        charCount: 3,
        direction: "vertical",
        start: {
          x: 5,
          y: 0,
        },
        end: {
          x: 5,
          y: 2,
        },
        partOfSolution: [
          {
            positionInAnswer: 3,
            positionInSolution: 3,
            char: "T",
          },
        ],
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-12",
          overlappingChar: {
            positionOfCharInWord: 6,
            overlappingField: {
              x: 5,
              y: 1,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-13",
          overlappingChar: {
            positionOfCharInWord: 5,
            overlappingField: {
              x: 5,
              y: 2,
            },
            char: "T",
          },
        },
      ],
    },
    {
      id: "Question-6",
      question: {
        position: {
          x: 6,
          y: 0,
        },
        direction: "right-down",
        value: "",
      },
      answer: {
        value: "",
        charCount: 3,
        direction: "vertical",
        start: {
          x: 7,
          y: 0,
        },
        end: {
          x: 7,
          y: 2,
        },
        partOfSolution: false,
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-11",
          overlappingChar: {
            positionOfCharInWord: 1,
            overlappingField: {
              x: 7,
              y: 1,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-13",
          overlappingChar: {
            positionOfCharInWord: 7,
            overlappingField: {
              x: 7,
              y: 2,
            },
            char: "",
          },
        },
      ],
    },
    {
      id: "Question-7",
      question: {
        position: {
          x: 8,
          y: 0,
        },
        direction: "right-down",
        value: "",
      },
      answer: {
        value: "-Y-",
        charCount: 3,
        direction: "vertical",
        start: {
          x: 9,
          y: 0,
        },
        end: {
          x: 9,
          y: 2,
        },
        partOfSolution: [
          {
            positionInAnswer: 2,
            positionInSolution: 8,
            char: "Y",
          },
        ],
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-11",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 9,
              y: 1,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-14",
          overlappingChar: {
            positionOfCharInWord: 1,
            overlappingField: {
              x: 9,
              y: 2,
            },
            char: "",
          },
        },
      ],
    },
    {
      id: "Question-9",
      question: {
        position: {
          x: 10,
          y: 0,
        },
        direction: "right-down",
        value: "",
      },
      answer: {
        value: "--K--",
        charCount: 5,
        direction: "vertical",
        start: {
          x: 11,
          y: 0,
        },
        end: {
          x: 11,
          y: 4,
        },
        partOfSolution: [
          {
            positionInAnswer: 3,
            positionInSolution: 11,
            char: "K",
          },
        ],
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-11",
          overlappingChar: {
            positionOfCharInWord: 5,
            overlappingField: {
              x: 11,
              y: 1,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-14",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 11,
              y: 2,
            },
            char: "K",
          },
        },
        {
          overlappingQuestionFieldId: "Question-15",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 11,
              y: 3,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-19",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 11,
              y: 4,
            },
            char: "",
          },
        },
      ],
    },
    {
      id: "Question-10",
      question: {
        position: {
          x: 12,
          y: 0,
        },
        direction: "down",
        value: "",
      },
      answer: {
        value: "",
        charCount: 6,
        direction: "vertical",
        start: {
          x: 12,
          y: 1,
        },
        end: {
          x: 12,
          y: 6,
        },
        partOfSolution: false,
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-11",
          overlappingChar: {
            positionOfCharInWord: 6,
            overlappingField: {
              x: 12,
              y: 1,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-14",
          overlappingChar: {
            positionOfCharInWord: 4,
            overlappingField: {
              x: 12,
              y: 2,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-15",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 12,
              y: 3,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-19",
          overlappingChar: {
            positionOfCharInWord: 4,
            overlappingField: {
              x: 12,
              y: 4,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-24",
          overlappingChar: {
            positionOfCharInWord: 4,
            overlappingField: {
              x: 12,
              y: 6,
            },
            char: "",
          },
        },
      ],
    },
    {
      id: "Question-11",
      question: {
        position: {
          x: 6,
          y: 1,
        },
        direction: "right",
        value: "",
      },
      answer: {
        value: "--Y---",
        charCount: 6,
        direction: "horizontal",
        start: {
          x: 7,
          y: 1,
        },
        end: {
          x: 12,
          y: 1,
        },
        partOfSolution: [
          {
            positionInAnswer: 3,
            positionInSolution: 8,
            char: "Y",
          },
        ],
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-6",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 7,
              y: 1,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-7",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 9,
              y: 1,
            },
            char: "Y",
          },
        },
        {
          overlappingQuestionFieldId: "Question-8",
          overlappingChar: {
            positionOfCharInWord: 1,
            overlappingField: {
              x: 10,
              y: 1,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-9",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 11,
              y: 1,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-10",
          overlappingChar: {
            positionOfCharInWord: 1,
            overlappingField: {
              x: 12,
              y: 1,
            },
            char: "",
          },
        },
      ],
    },
    {
      id: "Question-12",
      question: {
        position: {
          x: 0,
          y: 2,
        },
        direction: "up-right",
        value: "",
      },
      answer: {
        value: "",
        charCount: 6,
        direction: "horizontal",
        start: {
          x: 0,
          y: 1,
        },
        end: {
          x: 5,
          y: 1,
        },
        partOfSolution: false,
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-1",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 1,
              y: 1,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-2",
          overlappingChar: {
            positionOfCharInWord: 1,
            overlappingField: {
              x: 2,
              y: 1,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-3",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 3,
              y: 1,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-4",
          overlappingChar: {
            positionOfCharInWord: 1,
            overlappingField: {
              x: 4,
              y: 1,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-5",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 5,
              y: 1,
            },
            char: "",
          },
        },
      ],
    },
    {
      id: "Question-13",
      question: {
        position: {
          x: 0,
          y: 2,
        },
        direction: "right",
        value: "",
      },
      answer: {
        value: "----T--",
        charCount: 7,
        direction: "horizontal",
        start: {
          x: 1,
          y: 2,
        },
        end: {
          x: 7,
          y: 2,
        },
        partOfSolution: [
          {
            positionInAnswer: 5,
            positionInSolution: 3,
            char: "T",
          },
        ],
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-1",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 1,
              y: 2,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-2",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 3,
              y: 2,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-3",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 3,
              y: 2,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-4",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 4,
              y: 2,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-5",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 5,
              y: 2,
            },
            char: "T",
          },
        },
      ],
    },
    {
      id: "Question-14",
      question: {
        position: {
          x: 8,
          y: 2,
        },
        direction: "right",
        value: "",
      },
      answer: {
        value: "--K-",
        charCount: 4,
        direction: "horizontal",
        start: {
          x: 9,
          y: 2,
        },
        end: {
          x: 12,
          y: 2,
        },
        partOfSolution: [
          {
            positionInAnswer: 3,
            positionInSolution: 11,
            char: "K",
          },
        ],
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-7",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 9,
              y: 2,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-8",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 10,
              y: 2,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-9",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 11,
              y: 2,
            },
            char: "K",
          },
        },
        {
          overlappingQuestionFieldId: "Question-10",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 12,
              y: 2,
            },
            char: "",
          },
        },
      ],
    },
    {
      id: "Question-15",
      question: {
        position: {
          x: 8,
          y: 2,
        },
        direction: "right",
        value: "",
      },
      answer: {
        value: "--K-",
        charCount: 4,
        direction: "horizontal",
        start: {
          x: 9,
          y: 2,
        },
        end: {
          x: 12,
          y: 2,
        },
        partOfSolution: [
          {
            positionInAnswer: 3,
            positionInSolution: 11,
            char: "K",
          },
        ],
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-7",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 9,
              y: 2,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-8",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 10,
              y: 2,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-9",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 11,
              y: 2,
            },
            char: "K",
          },
        },
        {
          overlappingQuestionFieldId: "Question-10",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 12,
              y: 3,
            },
            char: "",
          },
        },
      ],
    },
    {
      id: "Question-16",
      question: {
        position: {
          x: 0,
          y: 4,
        },
        direction: "up-right",
        value: "",
      },
      answer: {
        value: "---H",
        charCount: 4,
        direction: "horizontal",
        start: {
          x: 0,
          y: 3,
        },
        end: {
          x: 3,
          y: 3,
        },
        partOfSolution: [
          {
            positionInAnswer: 4,
            positionInSolution: 7,
            char: "H",
          },
        ],
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-1",
          overlappingChar: {
            positionOfCharInWord: 4,
            overlappingField: {
              x: 1,
              y: 3,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-2",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 2,
              y: 3,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-3",
          overlappingChar: {
            positionOfCharInWord: 4,
            overlappingField: {
              x: 3,
              y: 3,
            },
            char: "H",
          },
        },
      ],
    },
    {
      id: "Question-17",
      question: {
        position: {
          x: 2,
          y: 4,
        },
        direction: "down",
        value: "",
      },
      answer: {
        value: "---P-----",
        charCount: 9,
        direction: "vertical",
        start: {
          x: 2,
          y: 5,
        },
        end: {
          x: 2,
          y: 13,
        },
        partOfSolution: [
          {
            positionInAnswer: 4,
            positionInSolution: 7,
            char: "P",
          },
        ],
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-18",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 2,
              y: 5,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-22",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 2,
              y: 6,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-23",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 2,
              y: 7,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-28",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 2,
              y: 8,
            },
            char: "P",
          },
        },
        {
          overlappingQuestionFieldId: "Question-29",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 2,
              y: 9,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-32",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 2,
              y: 10,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-36",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 2,
              y: 12,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-44",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 2,
              y: 13,
            },
            char: "",
          },
        },
      ],
    },
    {
      id: "Question-18",
      question: {
        position: {
          x: 0,
          y: 5,
        },
        direction: "right",
        value: "",
      },
      answer: {
        value: "",
        charCount: 3,
        direction: "horizontal",
        start: {
          x: 1,
          y: 5,
        },
        end: {
          x: 3,
          y: 5,
        },
        partOfSolution: false,
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-1",
          overlappingChar: {
            positionOfCharInWord: 6,
            overlappingField: {
              x: 1,
              y: 5,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-17",
          overlappingChar: {
            positionOfCharInWord: 1,
            overlappingField: {
              x: 2,
              y: 5,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-3",
          overlappingChar: {
            positionOfCharInWord: 6,
            overlappingField: {
              x: 3,
              y: 5,
            },
            char: "",
          },
        },
      ],
    },
    {
      id: "Question-20",
      question: {
        position: {
          x: 11,
          y: 5,
        },
        direction: "down",
        value: "",
      },
      answer: {
        value: "",
        charCount: 3,
        direction: "vertical",
        start: {
          x: 9,
          y: 4,
        },
        end: {
          x: 12,
          y: 4,
        },
        partOfSolution: false,
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-24",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 11,
              y: 6,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-25",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 11,
              y: 8,
            },
            char: "",
          },
        },
      ],
    },
    {
      id: "Question-21",
      question: {
        position: {
          x: 3,
          y: 6,
        },
        direction: "down",
        value: "",
      },
      answer: {
        value: "---S",
        charCount: 4,
        direction: "vertical",
        start: {
          x: 3,
          y: 7,
        },
        end: {
          x: 3,
          y: 10,
        },
        partOfSolution: [
          {
            positionInAnswer: 4,
            positionInSolution: 2,
            char: "S",
          },
        ],
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-23",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 3,
              y: 7,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-28",
          overlappingChar: {
            positionOfCharInWord: 4,
            overlappingField: {
              x: 3,
              y: 8,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-29",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 3,
              y: 9,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-32",
          overlappingChar: {
            positionOfCharInWord: 4,
            overlappingField: {
              x: 3,
              y: 10,
            },
            char: "S",
          },
        },
      ],
    },
    {
      id: "Question-22",
      question: {
        position: {
          x: 0,
          y: 7,
        },
        direction: "up-right",
        value: "",
      },
      answer: {
        value: "",
        charCount: 3,
        direction: "horizontal",
        start: {
          x: 0,
          y: 6,
        },
        end: {
          x: 2,
          y: 6,
        },
        partOfSolution: false,
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-1",
          overlappingChar: {
            positionOfCharInWord: 7,
            overlappingField: {
              x: 1,
              y: 6,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-17",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 2,
              y: 6,
            },
            char: "",
          },
        },
      ],
    },
    {
      id: "Question-23",
      question: {
        position: {
          x: 0,
          y: 7,
        },
        direction: "right",
        value: "",
      },
      answer: {
        value: "",
        charCount: 3,
        direction: "horizontal",
        start: {
          x: 1,
          y: 7,
        },
        end: {
          x: 3,
          y: 7,
        },
        partOfSolution: false,
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-1",
          overlappingChar: {
            positionOfCharInWord: 8,
            overlappingField: {
              x: 1,
              y: 7,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-17",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 2,
              y: 7,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-21",
          overlappingChar: {
            positionOfCharInWord: 1,
            overlappingField: {
              x: 3,
              y: 7,
            },
            char: "",
          },
        },
      ],
    },
    {
      id: "Question-24",
      question: {
        position: {
          x: 9,
          y: 7,
        },
        direction: "up-right",
        value: "",
      },
      answer: {
        value: "",
        charCount: 4,
        direction: "horizontal",
        start: {
          x: 9,
          y: 6,
        },
        end: {
          x: 12,
          y: 6,
        },
        partOfSolution: false,
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-8",
          overlappingChar: {
            positionOfCharInWord: 6,
            overlappingField: {
              x: 10,
              y: 6,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-20",
          overlappingChar: {
            positionOfCharInWord: 1,
            overlappingField: {
              x: 11,
              y: 6,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-10",
          overlappingChar: {
            positionOfCharInWord: 6,
            overlappingField: {
              x: 12,
              y: 6,
            },
            char: "",
          },
        },
      ],
    },
    {
      id: "Question-25",
      question: {
        position: {
          x: 9,
          y: 7,
        },
        direction: "down-right",
        value: "",
      },
      answer: {
        value: "",
        charCount: 4,
        direction: "horizontal",
        start: {
          x: 9,
          y: 8,
        },
        end: {
          x: 12,
          y: 8,
        },
        partOfSolution: false,
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-26",
          overlappingChar: {
            positionOfCharInWord: 1,
            overlappingField: {
              x: 10,
              y: 8,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-20",
          overlappingChar: {
            positionOfCharInWord: 3,
            overlappingField: {
              x: 11,
              y: 8,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-27",
          overlappingChar: {
            positionOfCharInWord: 1,
            overlappingField: {
              x: 12,
              y: 8,
            },
            char: "",
          },
        },
      ],
    },
    {
      id: "Question-26",
      question: {
        position: {
          x: 10,
          y: 7,
        },
        direction: "down",
        value: "",
      },
      answer: {
        value: "",
        charCount: 5,
        direction: "vertical",
        start: {
          x: 10,
          y: 8,
        },
        end: {
          x: 10,
          y: 12,
        },
        partOfSolution: false,
      },
      overlappingFields: [
        {
          overlappingQuestionFieldId: "Question-25",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 10,
              y: 8,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-30",
          overlappingChar: {
            positionOfCharInWord: 2,
            overlappingField: {
              x: 10,
              y: 10,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-35",
          overlappingChar: {
            positionOfCharInWord: 1,
            overlappingField: {
              x: 10,
              y: 11,
            },
            char: "",
          },
        },
        {
          overlappingQuestionFieldId: "Question-37",
          overlappingChar: {
            positionOfCharInWord: 1,
            overlappingField: {
              x: 10,
              y: 12,
            },
            char: "",
          },
        },
      ],
    },
    {
      id: "Question-27",
      question: {
        position: {
          x: 12,
          y: 7,
        },
        direction: "down",
        value: "",
      },
      answer: {
        value: "",
        charCount: 5,
        direction: "vertical",
        start: {
          x: 12,
          y: 8,
        },
        end: {
          x: 12,
          y: 12,
        },
      },
    },
    {
      id: "Question-28",
      question: {
        position: {
          x: 0,
          y: 9,
        },
        direction: "up-right",
        value: "",
      },
      answer: {
        value: "",
        charCount: 4,
        direction: "horizontal",
        start: {
          x: 0,
          y: 8,
        },
        end: {
          x: 3,
          y: 8,
        },
      },
    },
    {
      id: "Question-29",
      question: {
        position: {
          x: 0,
          y: 9,
        },
        direction: "right",
        value: "",
      },
      answer: {
        value: "",
        charCount: 3,
        direction: "horizontal",
        start: {
          x: 1,
          y: 9,
        },
        end: {
          x: 3,
          y: 9,
        },
      },
    },
    {
      id: "Question-30",
      question: {
        position: {
          x: 9,
          y: 9,
        },
        direction: "down-right",
        value: "",
      },
      answer: {
        value: "",
        charCount: 4,
        direction: "horizontal",
        start: {
          x: 9,
          y: 10,
        },
        end: {
          x: 12,
          y: 10,
        },
      },
    },
    {
      id: "Question-31",
      question: {
        position: {
          x: 11,
          y: 9,
        },
        direction: "down",
        value: "",
      },
      answer: {
        value: "",
        charCount: 8,
        direction: "vertical",
        start: {
          x: 11,
          y: 10,
        },
        end: {
          x: 11,
          y: 17,
        },
      },
    },
    {
      id: "Question-32",
      question: {
        position: {
          x: 0,
          y: 11,
        },
        direction: "up-right",
        value: "",
      },
      answer: {
        value: "",
        charCount: 4,
        direction: "horizontal",
        start: {
          x: 0,
          y: 10,
        },
        end: {
          x: 3,
          y: 10,
        },
      },
    },
    {
      id: "Question-33",
      question: {
        position: {
          x: 1,
          y: 11,
        },
        direction: "down",
        value: "",
      },
      answer: {
        value: "",
        charCount: 6,
        direction: "vertical",
        start: {
          x: 1,
          y: 12,
        },
        end: {
          x: 1,
          y: 17,
        },
      },
    },
    {
      id: "Question-34",
      question: {
        position: {
          x: 3,
          y: 11,
        },
        direction: "down",
        value: "",
      },
      answer: {
        value: "",
        charCount: 6,
        direction: "vertical",
        start: {
          x: 3,
          y: 12,
        },
        end: {
          x: 3,
          y: 17,
        },
      },
    },
    {
      id: "Question-35",
      question: {
        position: {
          x: 9,
          y: 11,
        },
        direction: "right",
        value: "",
      },
      answer: {
        value: "",
        charCount: 3,
        direction: "horizontal",
        start: {
          x: 10,
          y: 11,
        },
        end: {
          x: 12,
          y: 11,
        },
      },
    },
    {
      id: "Question-36",
      question: {
        position: {
          x: 0,
          y: 12,
        },
        direction: "right",
        value: "",
      },
      answer: {
        value: "",
        charCount: 3,
        direction: "horizontal",
        start: {
          x: 1,
          y: 12,
        },
        end: {
          x: 3,
          y: 12,
        },
      },
    },
    {
      id: "Question-37",
      question: {
        position: {
          x: 9,
          y: 12,
        },
        direction: "right",
        value: "",
      },
      answer: {
        value: "",
        charCount: 3,
        direction: "horizontal",
        start: {
          x: 10,
          y: 12,
        },
        end: {
          x: 12,
          y: 12,
        },
      },
    },
    {
      id: "Question-38",
      question: {
        position: {
          x: 9,
          y: 12,
        },
        direction: "down",
        value: "",
      },
      answer: {
        value: "",
        charCount: 4,
        direction: "vertical",
        start: {
          x: 9,
          y: 13,
        },
        end: {
          x: 9,
          y: 16,
        },
      },
    },
    {
      id: "Question-39",
      question: {
        position: {
          x: 4,
          y: 13,
        },
        direction: "right-down",
        value: "",
      },
      answer: {
        value: "",
        charCount: 5,
        direction: "vertical",
        start: {
          x: 5,
          y: 13,
        },
        end: {
          x: 5,
          y: 17,
        },
      },
    },
    {
      id: "Question-40",
      question: {
        position: {
          x: 6,
          y: 13,
        },
        direction: "right-down",
        value: "",
      },
      answer: {
        value: "",
        charCount: 5,
        direction: "horizontal",
        start: {
          x: 7,
          y: 13,
        },
        end: {
          x: 7,
          y: 17,
        },
      },
    },
    {
      id: "Question-41",
      question: {
        position: {
          x: 8,
          y: 13,
        },
        direction: "down",
        value: "",
      },
      answer: {
        value: "",
        charCount: 4,
        direction: "vertical",
        start: {
          x: 8,
          y: 14,
        },
        end: {
          x: 8,
          y: 17,
        },
      },
    },
    {
      id: "Question-42",
      question: {
        position: {
          x: 10,
          y: 13,
        },
        direction: "down",
        value: "",
      },
      answer: {
        value: "",
        charCount: 4,
        direction: "vertical",
        start: {
          x: 10,
          y: 14,
        },
        end: {
          x: 10,
          y: 17,
        },
      },
    },
    {
      id: "Question-43",
      question: {
        position: {
          x: 12,
          y: 13,
        },
        direction: "down",
        value: "",
      },
      answer: {
        value: "",
        charCount: 4,
        direction: "vertical",
        start: {
          x: 12,
          y: 14,
        },
        end: {
          x: 12,
          y: 17,
        },
      },
    },
    {
      id: "Question-44",
      question: {
        position: {
          x: 0,
          y: 14,
        },
        direction: "up-right",
        value: "",
      },
      answer: {
        value: "",
        charCount: 4,
        direction: "horizontal",
        start: {
          x: 0,
          y: 13,
        },
        end: {
          x: 3,
          y: 17,
        },
      },
    },
    {
      id: "Question-45",
      question: {
        position: {
          x: 0,
          y: 13,
        },
        direction: "down-right",
        value: "",
      },
      answer: {
        value: "",
        charCount: 5,
        direction: "horizontal",
        start: {
          x: 0,
          y: 15,
        },
        end: {
          x: 3,
          y: 15,
        },
      },
    },
    {
      id: "Question-46",
      question: {
        position: {
          x: 2,
          y: 14,
        },
        direction: "right",
        value: "",
      },
      answer: {
        value: "",
        charCount: 3,
        direction: "horizontal",
        start: {
          x: 3,
          y: 14,
        },
        end: {
          x: 5,
          y: 14,
        },
      },
    },
    {
      id: "Question-47",
      question: {
        position: {
          x: 2,
          y: 14,
        },
        direction: "down",
        value: "",
      },
      answer: {
        value: "",
        charCount: 3,
        direction: "vertical",
        start: {
          x: 2,
          y: 15,
        },
        end: {
          x: 2,
          y: 17,
        },
      },
    },
    {
      id: "Question-48",
      question: {
        position: {
          x: 6,
          y: 14,
        },
        direction: "right",
        value: "",
      },
      answer: {
        value: "",
        charCount: 6,
        direction: "horizontal",
        start: {
          x: 7,
          y: 14,
        },
        end: {
          x: 12,
          y: 14,
        },
      },
    },
    {
      id: "Question-49",
      question: {
        position: {
          x: 4,
          y: 15,
        },
        direction: "right",
        value: "",
      },
      answer: {
        value: "",
        charCount: 8,
        direction: "horizontal",
        start: {
          x: 5,
          y: 15,
        },
        end: {
          x: 12,
          y: 15,
        },
      },
    },
    {
      id: "Question-50",
      question: {
        position: {
          x: 4,
          y: 15,
        },
        direction: "down",
        value: "",
      },
      answer: {
        value: "",
        charCount: 2,
        direction: "vertical",
        start: {
          x: 4,
          y: 16,
        },
        end: {
          x: 4,
          y: 17,
        },
      },
    },
    {
      id: "Question-51",
      question: {
        position: {
          x: 0,
          y: 16,
        },
        direction: "right",
        value: "",
      },
      answer: {
        value: "",
        charCount: 5,
        direction: "horizontal",
        start: {
          x: 1,
          y: 16,
        },
        end: {
          x: 5,
          y: 16,
        },
      },
    },
    {
      id: "Question-52",
      question: {
        position: {
          x: 6,
          y: 16,
        },
        direction: "right",
        value: "",
      },
      answer: {
        value: "",
        charCount: 6,
        direction: "horizontal",
        start: {
          x: 7,
          y: 16,
        },
        end: {
          x: 12,
          y: 16,
        },
      },
    },
    {
      id: "Question-53",
      question: {
        position: {
          x: 0,
          y: 17,
        },
        direction: "right",
        value: "",
      },
      answer: {
        value: "",
        charCount: 8,
        direction: "horizontal",
        start: {
          x: 1,
          y: 17,
        },
        end: {
          x: 8,
          y: 17,
        },
      },
    },
    {
      id: "Question-54",
      question: {
        position: {
          x: 9,
          y: 17,
        },
        direction: "right",
        value: "",
      },
      answer: {
        value: "",
        charCount: 3,
        direction: "horizontal",
        start: {
          x: 10,
          y: 17,
        },
        end: {
          x: 12,
          y: 17,
        },
      },
    },
  ],
};
