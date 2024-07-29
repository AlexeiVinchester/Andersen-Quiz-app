import { ResultContainerProps } from "./interface/resultContainer.interface";

const ResultContainer = ({ children, header }: ResultContainerProps) => {
    return (
        <div className="result-container">
            <h4>{header}: </h4>
            {children}
        </div>
    );
};

export { ResultContainer };
