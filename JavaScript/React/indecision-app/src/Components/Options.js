import React from "react";
import Option from "./Option";

const Options = (props) => (
    <div>
        <div className="widgetHeader">
            <h3 className="widgetHeader__title">
                Your Options
            </h3>
            <button
                className="button button--link"
                onClick={props.handleRemoveAll}>Remove All</button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started! </p>}

        {
            props.options.map((option , index) => (
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                    count={index+1}
                />
            ))
        }
    </div>
)


export default Options

