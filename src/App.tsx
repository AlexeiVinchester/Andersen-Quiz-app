import { StartPage } from './components/pages/StartPage/StartPage';
import { MainQuizPage } from './components/pages/MainQuizPage/MainQuizPage';
import { ResultQuizPage } from './components/pages/ResultQuizPage/ResultQuizPage';
import './App.css';
import { initialQuizConfig } from './components/initialValues/initialQuizConfig';
function App() {

    return (
        <>
            <StartPage />
            <MainQuizPage />
            <ResultQuizPage quizConfig={initialQuizConfig}/>
        </>
    )
}

export { App };
