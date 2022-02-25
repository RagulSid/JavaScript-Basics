
class Person {
    constructor (name, age){
        this.name = name
        this.age = age
        this.job ="" //used for abstraction demo
    }

    getName = () => {
        return this.name;
    };

    getAge = () => {
        return this.age;
    };

    setJob = (job) => {  //used for abstraction demo
        this.job = job;
    }
}

let person1 = new Person('Ragul',19);
let person2 = new Person('Musk', 40);
console.log(person1.name);
console.log(person2.getAge())


class Home {
    constructor(address, price, owners){
        this.address = address;
        this.price = price;
        this.owners = owners;
    }

    getAddress = () => {
        return this.address;
    }
    getPrice = () =>{ return this.price};
    getOwners = () =>{return this.owners};

    addOwner = (owners) => {
        this.owners.push(owners);
    };
     
}

let Ragul = new Person("ragul", 19);
let Musk = new Person("musk", 40);

let home1 = new Home("southstreet", 100000, [Ragul,Musk]);
//console.log(home1.getOwners())  //return objects (list of objects)

let Jeff = new Person("jeff",35);
home1.addOwner(Jeff)             //Adding owners
//console.log(home1.getOwners())


//Abstraction
//person working with houses dont need to see person class so we hiding it 
let Sundar = new Person("sundar",42);
let home2 = new Home("mainroad", 200000, []);
home2.addOwner(new Person("Sundar",42));
Sundar.setJob("Developer");
home2.addOwner(Sundar);
//console.log(home2.getOwners());


//Encapsulation
let zuck = new Person("zuck", 32);
console.log(zuck.age)
//you can also use this but its not so secure
//we can oops to hide these datas by putting methods inside the construtor like below
//(underscore is used for indicating private)
class Person1 {
    constructor (name, age){
        this.name = name
        this.age = age
        this.job =""

        getName = () => { return this.name };  
        getAge = () => { return this.age };   
        setJob = (job) => { this.job = job }
    }
}


//Inheritance
//extending the properities of person to programmer
class Programmer extends Person {
    constructor (name,age,company,salary,language){
        super(name, age);
        this.company = company;
        this.salary = salary;
        this.language = language;
    }

    greet= () => { console.log(`Hello ${this.name} ,Welcome to ${this.company}`) }

}

let programmer = new Programmer("Ragul",19,"Google",500000,"javaScript");
programmer.greet();


//Polymorphism
console.log(100+"200") //simple use of polymorphism
//creating multiple profiles for persons eg: like programmer,doctor it can be anthing
//properties of person fits for this class too
class doctor extends Person {
    constructor (name,age,salary){
        super(name, age);
        this.salary = salary;
    }

    greet= () => { console.log(`Hello ${this.name} ,your salary is ${this.salary}`) }

}
let doctor1 = new doctor("Ragul",19,500000);
doctor1.greet();
