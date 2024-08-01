import { useLocation } from "react-router-dom";

const useGetStopTime = () => {
    const location = useLocation();
    return location.state.seconds;
};

export { useGetStopTime };