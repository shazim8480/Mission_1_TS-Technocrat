const makePromise = () : Promise <string> => { // explicit declaration of promise type
    return new Promise <string>((resolve, reject) => {
            let data : string = "Lets make a promise call..."
            if (data) {
                resolve(data)
            } else {
                reject("Failed to load data")
            }
        }
        )
    
}

const getResolvedPromiseData = async () : Promise <void> => {
    const data = await makePromise();
    // console.log("promise data", data);
    // return data ===> if data is returned, data type will be string instead of void
}

// let's try with real api //
// result obj interface //

interface ITodoObj {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

const getTodo = async (): Promise <ITodoObj> => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json()
}

const getTodoData = async (): Promise <void> => {
    const result = await getTodo();
    console.log("promise todo result",result);
    
}

getTodoData();