import { useContext } from "react";
import { timerIdContext } from "../context/contexts";

const useTimerId = () => {
    return useContext(timerIdContext);
};

export { useTimerId };