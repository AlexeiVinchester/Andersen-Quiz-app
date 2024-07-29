export interface Data {
    type: string,
    difficulty: string,
    category: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

export interface InitialState {
    data: null | Data,
    loading: boolean,
    error: null | string | undefined
}

export const initialStateObj: InitialState = {
    data: null,
    loading: false,
    error: null
};