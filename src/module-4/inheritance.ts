// parent class to hold the common properties //

class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

// methods
    shouldSleep(hour: number): string{
        return `${this.name} should have ${hour} of sleep!`
    }
}

// let's see the example of inheritance in Student class //
class Student extends Parent {
    constructor(name: string, age: number, address: string){
        super(name, age, address); // get from parent
    }
}

// to create a instance of Student, we'll need the exact properties //
const student1 = new Student("Adnan", 21, "DHK")

class Teacher extends Parent {
    rank: string;

    constructor(name: string, age: number, address: string, rank: string){
        super(name, age, address)
        this.rank = rank;
    }

// methods]
    takeClasses(numOfClasses: number): string{
        return `${this.name}; a ${this.rank}, takes ${numOfClasses} classes!`
    }
}

const teacher1 = new Teacher("Shazim", 25, "DHK", "Asst. Prof")
