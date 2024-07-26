import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../../spreadedComponents/StyledButton/StyledButton";
import { ModalPage } from "../../ModalPage/ModalPage";
import { START } from "../../../Router/routes";

const EndQuizButton = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const onCloseModalHandler = () => setShowModal(!showModal);
    const onNavigateToResultHandler = () => navigate(START);

    return (
        <>
            <StyledButton onClickHandler={onCloseModalHandler} text="Finish test" />
            <ModalPage
                isOpen={showModal}
                setShowModal={onCloseModalHandler}
                onConfirm={onNavigateToResultHandler}
            >
                <div className="title">
                    <h1>Are you sure you want to finish quiz?</h1>
                </div>
                <div className="body">
                    <p>The next page will show you your result!</p>
                </div>
            </ModalPage>

        </>

    );
};

export { EndQuizButton };