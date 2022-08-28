import React from "react";
import AddOption from "./AddOptions";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    }

    handleRemoveAll = () => {
        this.setState(() => ({ options: [] }))
    };

    closeModal = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'this option already exists'
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }

    handlePicked = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState(() => ({ selectedOption: option }))
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json)
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
            console.log(e)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
    }
    componentWillUnmount() {
        console.log('unmount')
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer '
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container" >
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePicked={this.handlePicked}
                    />
                    <div className="widget">

                        <Options
                            options={this.state.options}
                            handleRemoveAll={this.handleRemoveAll}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>

                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        closeModal={this.closeModal}
                    />
                </div>
            </div>
        );
    }
}
