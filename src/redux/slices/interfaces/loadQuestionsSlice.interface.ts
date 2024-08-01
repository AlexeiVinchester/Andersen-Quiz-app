export interface Data {
    type: string,
    difficulty: string,
    category: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

export interface InitialState {
    data: Data[],
    loading: boolean,
    error: null | string | undefined
}

export const initialStateObj: InitialState = {
    data: [{
        type: '',
        difficulty: '',
        category: '',
        question: '',
        correct_answer: '',
        incorrect_answers: ['','','']
    }],
    loading: false,
    error: null
};