export interface Difficulties {
    easy: number,
    medium: number,
    hard: number
}

export interface Categories {
    sports: number,
    geography: number,
    vehicles: number
}

export interface Types {
    group: number,
    boolean: number
}

export interface Statistics {
    totalQuestions: number,
    totalCorrectAnswers: number,
    difficulties: Difficulties,
    categories: Categories,
    types: Types
}

export const initialStatistics: Statistics = {
    totalQuestions: 0,
    totalCorrectAnswers: 0,
    difficulties: {
        easy: 0,
        medium: 0,
        hard: 0
    },
    categories: {
        sports: 0,
        geography: 0,
        vehicles: 0
    },
    types: {
        group: 0,
        boolean: 0
    }
};