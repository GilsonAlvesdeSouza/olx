import React from "react";
import ReactDOM from "react-dom";
import { ModalArea, Modal } from "./styled";

const PORTAL_ROOT = document.getElementById("portal-root");

function UIModal({ children, isOpen, onCloseModal }) {
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <ModalArea>
      <Modal>
        <button type="button" onClick={onCloseModal}>X</button>
        {children}
      </Modal>
    </ModalArea>,
    PORTAL_ROOT
  );
}

export default UIModal;
