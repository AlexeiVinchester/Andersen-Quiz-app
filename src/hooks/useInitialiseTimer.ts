import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetInitialTime } from "./useGetInitialTime";
import { RESULT } from "../components/Router/routes";

const useInitialiseTimer = () => {

    const initialTime = useGetInitialTime();
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [seconds, setSeconds] = useState(initialTime);
    const navigate = useNavigate();

    const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secondsString = String(seconds % 60).padStart(2, "0");
    const isDanger = seconds < 10;

    useEffect(() => {
        const timerId = setInterval(() => setSeconds((prev) => Math.max(prev - 1, 0)), 1000);
        if (seconds <= 0) navigate(RESULT, {state: {seconds}});
        return () => {
            clearInterval(timerId);
        };
    });

    return {
        seconds,
        activeQuestionIndex,
        setActiveQuestionIndex,
        navigate,
        minutesString,
        secondsString,
        isDanger
    };
}

export { useInitialiseTimer };