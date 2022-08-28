import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (

    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="selectedOption"
    >
        <h3>
            Selected option
        </h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button
            className="button button--link"
            onClick={props.closeModal}>closeModal</button>
    </Modal>
);

export default OptionModal;