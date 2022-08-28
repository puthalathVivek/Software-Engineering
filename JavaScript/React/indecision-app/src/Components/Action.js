import React from "react";

const Action = (props) => (
    <div>
        <button
            className="big_button"
            onClick={props.handlePicked}
            disabled={!props.hasOptions}
        >
            what should I do ?
        </button>
    </div>
);

export default Action