import { useGetInitialTime } from "../../../../hooks/useGetInitialTime";
import { useGetStopTime } from "../../../../hooks/useGetStopTime";

const FinishTime = () => {
    const stopTime = useGetStopTime();
    const initialTime = useGetInitialTime();
    const minutes = String(Math.floor((initialTime - stopTime) / 60));
    const seconds = String((initialTime - stopTime) % 60);

    return (
        <p className="finish-time">
            Your time is: { minutes ? minutes + " min" : null} {seconds} sec
        </p>
    )
};

export { FinishTime };
