import { TimerContainerProps } from "../../../spreadedInterfaces/timerContainer.interface"

const FinishTime = ({ startTime }: TimerContainerProps) => {
  return (
    <p className="finish-time">
      Your time is: {startTime}
    </p>
  )
}

export { FinishTime };
