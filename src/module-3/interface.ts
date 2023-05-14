// type alias === basic
type User = {
    name: string;
    age: number;
}

const userOfTypeAlias : User = {
    name : "Type Alias",
    age : 0
}

// extending using type alias => by using union
type ExtendedTypeAliasUser = User & {
    id : number
}
const userOfExtendedTypeAlias : ExtendedTypeAliasUser = {
    id: 1,
    name: "Extended Type Alias",
    age: 60
}

// creating a function signature using type alias//
type AddNumbersType = (num1 : number, num2 : number) => number

const addNumbers : AddNumbersType = (num1, num2) => num1 + num2 ; 

// declaring array type using type alias //

type ArrayOfNumbers = number[]

const numbers : ArrayOfNumbers = [1, 2, 3,]


// ================= interface =========================================

// interface => only for objects
interface IUser {
    name: string,
    age: number
}

const userOfInterface : IUser = {
    name : "Interface User",
    age: 30
}

// extended interface // e.g; extending IUser =>

interface IExtendedUser extends IUser {
    role : string
}

const userOfExtendedInterface : IExtendedUser = {
    name : "Extended Interface",
    age : 40,
    role : "admin"
}

// creating a function signature using interface//
interface IAddNumbersType {
    (num1 : number, num2 : number): number
}

const addNumbersInterface : IAddNumbersType = (num1, num2) => num1 + num2 ;

// declaring array type using interface //
interface IArrayOfNumbers {
    [index : number] : number // index will be number type and the data which the indexes are holding will also be of number type//
    // "indexing nature"
}

const rolls : IArrayOfNumbers = [2,6,9]







