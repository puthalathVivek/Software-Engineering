const appRoot = document.getElementById('app')

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name,age);
        this.major = major
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription(){
        let descricption = super.getGreeting()
        if(this.hasMajor()){
            descricption += `and their major is ${this.major}`
        }
        return descricption
    }
}

class traveller extends Person{
    constructor(name,age,destination){
        super(name,age)
        this.destination = destination
    }
    getGreeting(){
        return `Hi I am ${this.name}.I'm visiting ${this.destination}`
    }

}

const me = new Person('Vivek', 28);
const me1 = new Student('Vivek',28,'Mechanical')
const meT = new traveller('Vivek',28,'Manali')
console.log(meT.getGreeting())
console.log(me1.getDescription())
const anonymous = new Person();
console.log(me.getGreeting());
console.log(anonymous.getGreeting())
const render = () => {
    const template = (
        <div>
            <h1>
                Test
            </h1>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();