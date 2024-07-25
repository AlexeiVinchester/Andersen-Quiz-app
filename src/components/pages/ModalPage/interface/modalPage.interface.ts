import React from "react";

export interface ModalPageProps {
    setShowModal: () => void,
    onConfirm: () => void,
    isOpen: boolean,
    children: React.ReactNode
}
