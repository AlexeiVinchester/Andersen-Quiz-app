import { Question } from "../pages/MainQuizPage/QuestionContainer/interface/question.interface";

export const initialQuestion: Question = {
    question: 'What is the rigth answer?',
    choices: ['a', 'b', 'c', 'd'],
    correctAnswer: 'a',
    type: 'group'
};

export const questions: Question[] = [
    {
        question: 'Which function is used to serialize an object into a JSON string in Javascript?',
        choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
        type: 'group',
        correctAnswer: 'stringify()',
      },
      {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        choices: ['var', 'let', 'var and let', 'None of the above'],
        type: 'group',
        correctAnswer: 'var and let',
      },
      {
        question:
          'Which of the following methods can be used to display data in some form using Javascript?',
        choices: ['document.write()', 'console.log()', 'window.alert', 'All of the above'],
        type: 'group',
        correctAnswer: 'All of the above',
      },
      {
        question: 'How can a datatype be declared to be a constant type?',
        choices: ['const', 'var', 'let', 'constant'],
        type: 'group',
        correctAnswer: 'const',
      },
      {
        question: "What method of array adds new item to the end of array?",
        choices: ['pop', 'shift', 'push', 'forEach'],
        type: 'group',
        correctAnswer: 'push',
      },
      {
        question: "Does map method belongs to type string?",
        choices: ['true', 'false'],
        type: 'boolean',
        correctAnswer: 'false',
      },
      {
        question: "Does NaN belongs to type number?",
        choices: ['true', 'false'],
        type: 'boolean',
        correctAnswer: 'true',
      },
      {
        question: "What is the type of code: 'typeof 'string'?",
        choices: ['string', 'number', 'undefined', 'null'],
        type: 'group',
        correctAnswer: 'string',
      },
      {
        question: "Can we make deep clone of object with spread operator?",
        choices: ['true', 'false'],
        type: 'boolean',
        correctAnswer: 'false',
      },
];