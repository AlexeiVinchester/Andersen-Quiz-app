import { timerIdContext } from "./contexts";

interface TimerIdProvideerProps {
    children: React.ReactElement
}

const TimerIdProvider = ({ children }: TimerIdProvideerProps) => {
    const timerId = 'timerId-----';

    return (
        <timerIdContext.Provider value={timerId}>
            {children}
        </timerIdContext.Provider>
    )
};

export { TimerIdProvider};