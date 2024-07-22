import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import { BasicPage } from "../pages/BasicPage/BasicPage";
import { ConfigurationPage } from "../pages/ConfigurationPage/ConfigurationPage";
import { MainQuizPage } from "../pages/MainQuizPage/MainQuizPage";
import { ResultQuizPage } from "../pages/ResultQuizPage/ResultQuizPage";
import { StatisticsPage } from "../pages/StatisticsPage/StatisticsPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { initialQuizConfig } from "../initialValues/initialQuizConfig";
import { MAIN, RESULT, STATISTICS, NOTFOUND } from "./routes";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<BasicPage />}>
        <Route index element={<ConfigurationPage />} />
        <Route path={MAIN} element={<MainQuizPage />} />
        <Route path={RESULT} element={<ResultQuizPage quizConfig={initialQuizConfig} />} />
        <Route path={STATISTICS} element={<StatisticsPage />} />
        <Route path={NOTFOUND} element={<NotFoundPage />} />
    </Route>
));

export { router };