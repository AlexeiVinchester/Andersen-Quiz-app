import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { incrementSeconds } from "../redux/slices/resultSlice";
import { RESULT } from "../components/Router/routes";
import { Store } from "../redux/store/interface/store.interface";

const useInitialiseTimer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialTime = +useSelector((state: Store) => state.configuration.time)[0] * 60;
    const [seconds, setSeconds] = useState(initialTime);

    const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secondsString = String(seconds % 60).padStart(2, "0");
    const isDanger = seconds < 10;

    useEffect(() => {
        const timerId = setInterval(() => {
            setSeconds((prev) => Math.max(prev - 1, 0));
            dispatch(incrementSeconds());
        }, 1000);
        if (seconds <= 0) navigate(RESULT);
        return () => {
            clearInterval(timerId);
        };
    });

    return { minutesString, secondsString, isDanger };
};

export { useInitialiseTimer };