// functions
type OperationType = (x : number, y : number) => number;

const calculate = (
    number1:number, // 10
    number2:number, // 20
    operation : OperationType // (x, y) => x + y
    ) => {
    return operation(number1 , number2);
}

// console.log(calculate(10, 20, (x, y) => x + y)); //
// console.log(calculate(10, 20, (x, y) => x * y));

// objects
type UserType = {
    name: string,
    profession: string,
    age? : number, // optional type
    country: string
}

const user1 : UserType = {
    name : "Adnan",
    profession : "SDE",
    // age: 25,
    country: "BD"
}

// console.log(user1);

// boolean
type IsAdminValid = boolean

const admin : IsAdminValid = true;

console.log("admin access" ,admin);

// string
type CourseType = string;

const courseName : CourseType = "Fundamentals of Programming"

console.log("courseName ==>" , courseName);



