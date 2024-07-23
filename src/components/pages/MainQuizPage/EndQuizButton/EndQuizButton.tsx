import { useState } from "react";
import { StyledButton } from "../../../spreadedComponents/StyledButton/StyledButton";
import { createPortal } from "react-dom";
import { ModalPage } from "../../ModalPage/ModalPage";
import { START } from "../../../Router/routes";
import { useNavigate } from "react-router-dom";

const EndQuizButton = () => {

    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const onShowModalHandler = () => setShowModal(!showModal);
    const onNavigateToResultHandler = () => navigate(START);

    return (
        <>
            <StyledButton onClickHandler={onShowModalHandler} text="Finish test" />
            {
                showModal && createPortal(
                    <ModalPage
                        setShowModal={onShowModalHandler}
                        navigateToResult={onNavigateToResultHandler}
                    />,
                    document.body
                )
            }
        </>

    );
};

export { EndQuizButton };