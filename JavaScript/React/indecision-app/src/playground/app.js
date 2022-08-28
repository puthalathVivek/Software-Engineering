class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handlePicked = this.handlePicked.bind(this)
        this.state = {
            options: []
        }
    }
    handleRemoveAll() {
        this.setState(()=>{return{
            options:[]
        }})
        }

    handleAddOption(option) {
        if(!option){
            return 'Enter valid value to add item'
        }else if (this.state.options.indexOf(option) > -1){
            return 'this option already exists'
        }
        this.setState((prevState)=>{
            return{
                options : prevState.options.concat(option)
            }
        })
    }

    handlePicked() {
        const randomNum =Math.floor(Math.random()* this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
        }

    render() {
        const Title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer '
        return (
            <div>
                <Header Title={Title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePicked={this.handlePicked}
                />

                <Options
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    {this.props.Title}
                </h1>
                <h2>
                    {this.props.subtitle}
                </h2>
            </div>
        )
    }
}

class Action extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handlePicked} disabled={!this.props.handleAddOption}>
                    What should I do ?
                </button>
            </div>
        )
    }
}

class Options extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optiontext={option} />)
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optiontext}
            </div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error : undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();
        const option =e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option)
        this.setState(()=>{
            return{error}
        })
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>
                        Add Option
                    </button>
                </form>
            </div>
        )
    }
}


const appRoot = document.getElementById('app')
ReactDOM.render(<IndecisionApp />, appRoot)