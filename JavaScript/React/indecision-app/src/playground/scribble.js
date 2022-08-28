const appRoot = document.getElementById('app')

let visibility = false
const updateVisibility = () => {
    visibility = !visibility
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>
                Visibility Toggle
            </h1>
            <button onClick={updateVisibility}>
                {visibility ? 'Hide Details' : 'Show details'}
            </button>
            {
                visibility && (<div>
                    <p>There is some details</p>
                </div>)
            }
        </div>
    );

    ReactDOM.render(template, appRoot)
}
render();