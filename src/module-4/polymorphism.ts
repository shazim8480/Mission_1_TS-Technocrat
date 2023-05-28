// *** EXAMPLE with NormalPerson class's dailySleep method acting differently for different shapes //

class NormalPerson {
    // no parameter is received, thus, no constructor shall be declared//
    // methods //
    dailySleep(): void{
        console.log("8 hours/day");
    }
}

class NormalStudent extends NormalPerson {
    dailySleep(): void{
        console.log("10 hours/day");
    }
}

class Developer extends NormalPerson {
    dailySleep(): void {
        console.log("5 hours/day");
    }
}


// gen func //
function getDailySleepHours(param: NormalPerson): any{
   param.dailySleep();
}

// create separate instances for all 3 classes
const normalPersonInstance = new NormalPerson();
const normalStudentInstance = new NormalStudent();
const normalDeveloperInstance = new Developer();

getDailySleepHours(normalPersonInstance);
getDailySleepHours(normalStudentInstance);
getDailySleepHours(normalDeveloperInstance);

// *** EXAMPLE with shape class's getArea method acting differently for different shapes //

class Shape {
    getArea(): number{
        return 0;
    }
}

// circle 
class Circle extends Shape {
    radius: number; // param
    
    constructor(radius: number){
        super(); // *** no param bcz of Shape Class //
        this.radius = radius;
    }
    // area of circle = PI * r * r
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// rectangle
class Rectangle extends Shape {
    width: number; // param 1st
    height: number; // param 2nd

    constructor(width: number, height: number){
        super(); // *** no param bcz of Shape Class //
        this.width = width;
        this.height = height;
    }

    // area of rectangle = height x width
    getArea(): number {
        return this.height * this.width;
    }
}

// general function to call and show result based on SHAPE CLASS //

function getAreaOfShapes(param: Shape){
    console.log(param.getArea());
}

const circleInstance = new Circle(20); // radius
const rectangleInstance = new Rectangle(20, 40); // height, width //

getAreaOfShapes(circleInstance);
getAreaOfShapes(rectangleInstance);