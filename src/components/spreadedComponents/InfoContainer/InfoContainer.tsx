import { InfoContainerProps } from "./interface/infoContainer.interface";

const InfoContainer = ({ children, header }: InfoContainerProps) => {
    return (
        <div className="info-container">
            <h4>{header}: </h4>
            {children}
        </div>
    );
};

export { InfoContainer };
