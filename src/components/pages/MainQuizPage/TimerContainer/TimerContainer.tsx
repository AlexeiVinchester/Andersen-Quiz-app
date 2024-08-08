import { useInitialiseTimer } from "../../../../hooks/useInitialiseTimer";

const TimerContainer = () => {
    const { minutesString, secondsString, isDanger } = useInitialiseTimer();

    return (
        <div className="timer-container">
            Timer: {" "}
            <span className={String(isDanger && "timer-container-danger")}>
                {minutesString} : {secondsString}
            </span>
        </div>
    );
};

export { TimerContainer };