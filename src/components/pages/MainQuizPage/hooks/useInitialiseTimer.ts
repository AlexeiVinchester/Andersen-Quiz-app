import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useInitialiseTimer = () => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [seconds, setSeconds] = useState(20);
    const navigate = useNavigate();

    const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secondsString = String(seconds % 60).padStart(2, "0");
    const isDanger = seconds < 10;

    useEffect(() => {
        const timerId = setInterval(() => setSeconds((prev) => Math.max(prev - 1, 0)), 1000);
        return () => {
            clearInterval(timerId);
        };
    }, []);

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