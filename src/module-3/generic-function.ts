// Arrow function

const createArr = (param: string): string[] => {
    return [param] // return params as an array
}

const result1 = createArr("Bangladesh");

// now, let's convert it into a generic function //
const genericFuncArray = <T>(param: T): T[] => {
    return [param]
}

const resultAsGeneric = genericFuncArray<number>(1);

const resultAsGeneric2 = genericFuncArray<boolean>(true);

const resultAsGeneric3 = genericFuncArray<object>({name: "Adnan", age: 25});
// alternative to above example
const resultAsGeneric4 = genericFuncArray<{name: string, age: number}>({name: "Adnan", age: 25});

// using type declaration of the object
type Person = {name: string, age: number}
const resultAsGeneric5 = genericFuncArray<Person>({name: "Adnan", age: 25});



// let's find out tuples //
// same declaration but for tuples on line 11

const tupleFuncArray = <X, Y> (param1 : X, param2 : Y): [X, Y] => {
    return [param1, param2]
}

const tupleResult = tupleFuncArray<string, number>("Adnan", 25)


// spread operator //

const myInfo = {
    name: "Adnan",
    age: 26,
    salary : 35
}

// const addMyInfoToDatabase=(myInfo:object) =>{
const addMyInfoToDatabase=<T>(myInfo:T) =>{ // use generic to be able to take effect immediately of the spread operator
    const database = "SQL"
    const newData = {...myInfo, database};
    return newData
}

const resultSpread = addMyInfoToDatabase(myInfo);
