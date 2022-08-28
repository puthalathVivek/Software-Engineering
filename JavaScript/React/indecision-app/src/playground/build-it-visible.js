class Visibility extends React.Component {
    constructor(props) {
        super(props)
        this.updateVisibility = this.updateVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    updateVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.updateVisibility}>  {this.state.visibility ? 'Hide ' : 'Show '} </button>
                {this.state.visibility && <div><p>Here is some details</p></div>}
            </div>
        )
    }
}


ReactDOM.render(<Visibility />, document.getElementById('app'))