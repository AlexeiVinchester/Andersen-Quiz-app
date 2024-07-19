import { ModalPageProps } from "./interface/modalPage.interface";

const ModalPage = ({ setShowModal, navigateToResult }: ModalPageProps) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={setShowModal}>X</button>
                </div>
                <div className="title">
                    <h1>Are you sure you want to finish quiz?</h1>
                </div>
                <div className="body">
                    <p>The next page will show you your result!</p>
                </div>
                <div className="footer">
                    <button id="cancelBtn" onClick={setShowModal}>Cancel</button>
                    <button onClick={navigateToResult}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export { ModalPage };
