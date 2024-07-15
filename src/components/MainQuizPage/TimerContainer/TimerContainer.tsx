import { timerContainerProps } from "./interface/timerContainer.interface";

const TimerContainer = ({ startTime }: timerContainerProps) => {
    return (
        <div className="timer-container">Start time: {startTime} </div>
    )
};

export { TimerContainer };