import React from "react";

export interface ModalPageProps {
    setShowModal: () => void,
    navigateToResult: () => void,
    isOpen: boolean,
    children: React.ReactNode
}
