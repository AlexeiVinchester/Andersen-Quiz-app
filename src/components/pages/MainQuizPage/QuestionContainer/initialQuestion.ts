import { Question } from "./interface/question.interface";

export const initialQuestion: Question = {
    question: 'What is the rigth answer?',
    choices: ['a', 'b', 'c', 'd'],
    correctAnswer: 'a',
    type: 'group'
};