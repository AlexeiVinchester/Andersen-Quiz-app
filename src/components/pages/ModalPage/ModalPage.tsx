import { ModalPageProps } from "./interface/modalPage.interface";
import { createPortal } from "react-dom";

const ModalPage = ({ isOpen, setShowModal, navigateToResult, children }: ModalPageProps) => {

    if (!isOpen) return null;

    return createPortal(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={setShowModal}>X</button>
                </div>
                {children}
                <div className="footer">
                    <button id="cancelBtn" onClick={setShowModal}>Cancel</button>
                    <button onClick={navigateToResult}>Confirm</button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export { ModalPage };
