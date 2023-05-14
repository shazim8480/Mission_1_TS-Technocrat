// normal / arrow function
const addSum = (num1:number, num2:number):number => {
    return num1 + num2;
}
addSum(2, 5)

// callback func

const arrNum = [1,2,3]

const arrSum = arrNum.map((elem:number) => elem * elem)

console.log(arrSum);
