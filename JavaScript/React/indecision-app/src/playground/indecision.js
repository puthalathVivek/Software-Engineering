console.log('App is running')
const appRoot = document.getElementById('app')

const template = (
    <div>
        <h1>
            Indecision app
        </h1>
        <p>Some Info</p>
    </div>
);


const app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.Option.value
    if (option) {
        app.options.push(option)
        e.target.elements.Option.value = ''
        render();
    }
}

const removeAll = () => {
    app.options = []
    render();
}


const render = () => {
    const template3 = (
        <div>
            <h1>
                {app.title}
            </h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length}</p>
            <p>
                {app.options.length > 0 ? 'Here are your options' : 'No options'}
            </p>
            <ol>
                {app.options.map((option)=><li key={option} text='text'>Option : {option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="Text" name='Option' />
                <button>Add Option</button>
                <button onClick={removeAll}>Remove All</button>
            </form>
        </div>
    );



    ReactDOM.render(template3, appRoot);
}

render();