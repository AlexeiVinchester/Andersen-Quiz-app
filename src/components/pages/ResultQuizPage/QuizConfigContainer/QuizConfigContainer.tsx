import { QuizConfigContainerProps } from "./interface/quizConfigContainer.interface"

const QuizConfigContainer = ({ quizConfig }: QuizConfigContainerProps) => {
    return (
        <div className="quiz-config-container">
            <p>Category: <span>{quizConfig.category}</span> {' '}</p>
            <p>Difficulty: <span>{quizConfig.difficulty}</span> {' '}</p>
            <p>Type: <span>{quizConfig.type}</span> {' '}</p>
            <p>Time: <span>{quizConfig.time}</span></p>
        </div>
    )
}

export { QuizConfigContainer };
