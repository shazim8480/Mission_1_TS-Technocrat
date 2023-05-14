// generic type === to generalize a type
type GenericArr<T> = Array<T>

const rollsArr : GenericArr<number> = [1,2, 50, 66];
const namesArr : GenericArr<string> = ["Brim", "Breach", "Reyna"]

// generate generic for tuples
type GenericTuple<X, Y> = [X, Y]

// array
const tupleType : GenericTuple<string, number> = ["Hello", 25]

// array of object
const tupleWithObj : GenericTuple<object, number> = [
    {name: "Adnan", salary: 35000}, 25]