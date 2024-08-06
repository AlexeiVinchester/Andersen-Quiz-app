import { useSelector } from "react-redux";
import { useGetInitialTime } from "../../../../hooks/useGetInitialTime";
import { Store } from "../../../../redux/store/interface/store.interface";

const FinishTime = () => {
    const stopTime = useSelector((state: Store) => state.result.seconds);
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
