// forcing a generic to ALWAYS match & maintain the type of UserInfoType (a specific type)
interface IUserMandatoryInterface {
    name: string,
    age: number,
    salary : number,
}


type UserInfoType = {
    name: string,
    age: number,
    salary : number,
    isEmployed : boolean
}

const userInfo : UserInfoType = {
    name: "Adnan",
    age: 26,
    salary : 35,
    isEmployed : true
}

// write those properties / object which is a must in extends {}
const addMyInfo2ToDatabase=<T extends IUserMandatoryInterface>(userInfo:T) => { 
    // you can add other properties from userInfo, but you MUST maintain the properties/ object from extends {}
    const database = "SQL"
    const newData = {...userInfo, database};
    return newData
}

const result1Spread = addMyInfo2ToDatabase<UserInfoType>(userInfo);
