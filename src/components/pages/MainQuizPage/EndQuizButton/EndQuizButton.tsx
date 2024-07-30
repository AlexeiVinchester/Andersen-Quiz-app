import { useState } from "react";
import { StyledButton } from "../../../spreadedComponents/StyledButton/StyledButton";
import { ModalPage } from "../../ModalPage/ModalPage";
import { useClearCurrentQuizData } from "../../../../hooks/useClearCurrentQuizData";
import { useNavigate } from "react-router-dom";
import { START } from "../../../Router/routes";

const EndQuizButton = () => {
    const [showModal, setShowModal] = useState(false);
    const onCloseModalHandler = () => setShowModal(!showModal);
    const clearCurrentQuizData = useClearCurrentQuizData();
    const navigate = useNavigate();

    const onConfirmHandler = () => {
        clearCurrentQuizData();
        navigate(START);

    };

    return (
        <>
            <StyledButton onClickHandler={onCloseModalHandler} text="Finish test" />
            <ModalPage
                isOpen={showModal}
                setShowModal={onCloseModalHandler}
                onConfirm={onConfirmHandler}
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