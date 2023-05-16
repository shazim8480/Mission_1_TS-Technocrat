interface IUserInfo <U , T , V = null> {
    id: U,
    name : string,
    age : number,
    address : T,
    mobile?: V // optional generic, be default will be null
}

interface IAddressType 
    {city : string, country: string}


const userFirst : IUserInfo <number, string, number> = {
    id: 1,
    name: "User-1",
    age : 23,
    address : "24 Rankin Street",
    mobile: +880154323456
}

const userSecond : IUserInfo <string, IAddressType> = {
    id: "1",
    name: "User-1",
    age : 23,
    address : {
        city : "Dhaka",
        country : "Bangladesh"
    }
}

console.log(userFirst, userSecond);

