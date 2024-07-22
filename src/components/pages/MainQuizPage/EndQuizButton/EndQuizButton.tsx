import { useState } from "react";
import { StyledButton } from "../../../spreadedComponents/StyledButton/StyledButton";
import { createPortal } from "react-dom";
import { ModalPage } from "../../ModalPage/ModalPage";
import { START } from "../../../Router/routes";
import { useNavigate } from "react-router-dom";

const EndQuizButton = () => {

    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <StyledButton onClickHandler={() => setShowModal(true)} text="Finish test" />
            {
                showModal && createPortal(
                    <ModalPage
                        setShowModal={() => setShowModal(false)}
                        navigateToResult={() => navigate(START)}
                    />,
                    document.body
                )
            }
        </>

    );
};

export { EndQuizButton };