// if a type is dependent on another type //

type c1 = null;
type c2 = undefined;
type c3 = number;

type c4 = c1 extends string ? string : null;

// nested conditions //
type d = c1 extends null 
    ? null 
    : c2 extends number
    ? number 
    : c3 extends null 
    ? null 
    : never


// real life example > if a property exists in an object ? true : false

// main type //
type RandomUser = {
    id: number;
    name: string;
}

// check property type > as generic template
type CheckProperty1 <T> = T extends {id : number} ? true : false;

// to check a specific property using key of operator //
type CheckProperty2 <T, K> = K extends keyof RandomUser ? true : false;

// now give the final check
// if the userID in object exists
type CheckUserID = CheckProperty1<RandomUser>;

// if any property named "number" exists //
type CheckUserNumber = CheckProperty2<RandomUser, "number"> // false
type CheckUserName = CheckProperty2<RandomUser, "name"> // true


// ======== remove a user using type conditional ======= //

type Users = "u1" | "u2" | "u3" | "u4"

type RemoveUser <T, K> = T extends K ? never : T; // setting the specific value to never makes sure that type doesn't exist in union types //

type CurrentUser = RemoveUser <Users, "u2">