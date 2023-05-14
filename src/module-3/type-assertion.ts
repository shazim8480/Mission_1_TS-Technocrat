function kgToGram (param : string | number) : string | number | undefined {
    if (typeof param === "string") {
        const value = parseFloat(param)*1000;
        return `The converted result is ${value} gram`
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return `The converted value is ${value} gram`
    } 
}

const resultToBeString = kgToGram("5") as string // type assertion
const resultToBeNumber = <number>kgToGram(5)// type assertion -- alternative way (won't work in .tsx syntax)

console.log(resultToBeNumber);
console.log(resultToBeString);

// real example for tryCatch statement //
type CustomErrType = {
    message: string
}

try {
    
} catch (err) {
    console.log((err as CustomErrType).message);
}
