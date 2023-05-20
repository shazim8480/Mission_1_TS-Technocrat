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
type CheckProperty <T> = T extends {id : number} ? true : false;

// now give the final check
type CheckUserID = CheckProperty<RandomUser>