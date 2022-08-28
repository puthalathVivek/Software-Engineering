let count = 0
const addOne = () => {
    count++;
    renderCounterApp();
}

const renderCounterApp = () =>{
    const template3 = (
        <div>
            <h1>
                count: {count}
            </h1>
            <button onClick={addOne}> +1 </button>
            count: {count}
        </div>
        );
        ReactDOM.render(template3, appRoot);
}



renderCounterApp();
