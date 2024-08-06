import { useSelector } from "react-redux";
import { Store } from "../../../../redux/store/interface/store.interface";

const FinishTime = () => {
    const stopTime = useSelector((state: Store) => state.result.seconds);
    const minutes = String(Math.floor((stopTime) / 60));
    const seconds = String((stopTime) % 60);

    return (
        <p className="finish-time">
            Your time is: { minutes !== '0' ? minutes + " min" : null} {seconds} sec
        </p>
    );
};

export { FinishTime };
