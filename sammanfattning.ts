
//CALLBACK FUNCTION: When you want to execute a function inside of a function.
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 +  n2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result);
} );

//UNKNOWN TYPE: A better alternative to any
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Fredrik';
//Both are allowed, because unknown can be any type.

userName = userInput; //Is not allowed, as we can't say what type unknown is.

let userInput2: any;
userInput2 = 6;
userName = userInput2; //This is allowed because TS can't do type inferrence on any.


if (typeof userInput === 'string') {
    userName = userInput; //Allowed because TS knows that userInput is of type string.
}

//SPREAD OPERATOR: Write out all elements of an object
const hobbies = ['Sports', 'cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies); //Adds each element of hobbies into activeHobbies

const person = {
    name: 'Fredrik',
    age: 30
};

const copiedPerson = { ...person }; //Copy the values of person into a new object.

const sameRefAsPerson = person; //Both points to the same object reference in memory. Changing value in person also changes in sameRefAsPerson.

//REST PARAMETERS: Use an undefined number of input parameters
const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add(5, 10, 6, 3);

//ARRAY AND OBJECT DESTRUCTURING: Pull out elements from an array or object
const [hobby1, hobby2, ...remainingHobbies] = hobbies; //Arrays are ordered lists, the first extracted element is the first element of the array.

const {name: usersName, age} = person; //Objects are not ordered, therefore we need to specfy which element to extract.
//To assign a new name to the 'name' element, use : .

//THIS
var x = new MyObject();
x.printThing(); // SAFE, method is invoked where it is referenced

var y = x.printThing; // DANGER, invoking 'y()' may not have correct 'this'

window.addEventListener('click', x.printThing, 10); // DANGER, method is not invoked where it is referenced

window.addEventListener('click', () => x.printThing(), 10); // SAFE, method is invoked in the same expression


//Also
var x = new SomeClass();
// SAFE: Functions created from function.bind always preserve 'this'
window.setTimeout(x.someMethod.bind(x), 100);
//Bad thing is that .bind does not keep the type safety of TS.

//SHORTHAND INITIALIZATION: Save some rows by initializing properties in the constructor.
class department {
    private id: number;
    private name: string;

    constructor(
        id: number,
        n: string
    ) {
        this.id = id;
        this.name = name;
    }
}
// ===
class department {
   
    constructor(
        private id: number,
        private name: string    
    ) {
    }
}

//PROTECTED AND PRIVATE: A private property is only accessible from inside the base class.
//A protected property is accessible in the base class as well as in classes extending the base class.

class MyName {
    protected firstName = 'Fredrik';

    myNameIs() {
        console.log(this.firstName);
    }
}

class SayMyName extends MyName {
    sayMyName() {
        console.log(this.firstName); //Would not work if firstName was private
    }   
}

//GET AND SET: Working with private properties from outside of a class
class SuperPrivate {
    private employees: string[];

    constructor (
    ) {
        this.employees = ['me', 'you'];
    }

    get allEmployees() {
        return this.employees;
    }

    set newEmployee(employeeName: string) {
        this.employees.push(employeeName);
    }
}

const superPrivate = new SuperPrivate();

console.log(superPrivate.allEmployees);
superPrivate.newEmployee = 'it';

//STATIC PROPERTIES AND METHODS: Access properties and methods without instantiating a class

class StaticStuff {
    static whyIsThisSoCool = 'No instantiation!';

    static objectWithNameProperty(name: string) {
        return {name: name};
    } 
}

console.log(StaticStuff.whyIsThisSoCool);
StaticStuff.objectWithNameProperty

//ABSTRACT CLASS: Tell an extending class to create a defined method
abstract class Comedian {
    abstract saySomethingFunny(joke: string): void;
}

class ProspectComedian extends Comedian {
    saySomethingFunny(joke: string) { //ProspectComedian needs to be able to saySomethingFunny
        console.log(joke);
    }
}

//SINGLETONS AND PRIVATE CONSTRUCTORS: Only allow for one instance of a class to be created
class Earth {
    private constructor (
    ) {
    }

    private static instance: Earth;

    static getInstance() {
        if (Earth.instance) {
            return this.instance;
        } else {
            this.instance = new Earth();
            return this.instance;
        }
    }
}

const anEarth = new Earth(); //Not possible because of private constructor
const ourEarth = Earth.getInstance();
const sameEarth = Earth.getInstance();

//INTERFACE: Describes structures
interface Greetable{
    name: string;

    greet(phrase: string): void;
}

class Person implements Greetable {

    name = 'Fredrik';

    greet(phrase: string) {
        console.log(name + " says " + phrase);
    }
}

