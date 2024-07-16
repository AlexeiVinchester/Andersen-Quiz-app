import { TimerContainerProps } from "./interface/timerContainer.interface";

const TimerContainer = ({ startTime }: TimerContainerProps) => {
    return (
        <div className="timer-container">Start time: {startTime} </div>
    )
};

export { TimerContainer };