// type-guard = >  in Typescript, to guard a specific type //

// 1. keyOf guard //

type AlphaNumeric = string | number;

function add(param1 : AlphaNumeric, param2: AlphaNumeric): AlphaNumeric {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    } else {
        return param1.toString() + param2.toString();
    }
}

// add(1, 2);
// add("1", "2");


// in - guard => for object //

type NormalUserType = {
    name: string
}

type AdminUserType = {
    name: string,
    role: "admin"
}

function getUser(user: NormalUserType | AdminUserType): string {
        // Your code :)
        if ('role' in user) { // if there's a role exists in user param, it'll be admin
            return `User is ${user.role}.`
        } else {
            return `User is guest.`
        }
    
}

const adminUser: AdminUserType = {name: "Admin (Registrar)", role: "admin"} // object literal //
const normalUser: NormalUserType = {name: "Tina"} // object literal //

// console.log(getUser(adminUser));
// console.log(getUser(normalUser));

// =================== instanceof guard => OOP Special ========================

// parent class = ParentAnimal

class ParentAnimal {
    name: string;
    species: string;

    constructor(name:string, species: string){
        this.name = name;
        this.species = species
    }

    // methods //
    makeSound(){
        console.log("Animal makes sound..");
        
    }
}

// child classes depending on ParentAnimal//

class Dog extends ParentAnimal {
    constructor(name:string, species: string){
        super(name, species)
    }

    // own method //
    makeBark(){
        console.log("Alpha 6, going bark.");
    }
}
class Cat extends ParentAnimal {
    constructor(name:string, species: string){
        super(name, species)
    }
    // own method //
    makeMeow(){
        console.log("Cat is meowing..");
    }
}

// check if the animal is dog / cat with type checking
function isDog(animal: ParentAnimal):animal is Dog { // taking class/ obj as type
    return animal instanceof Dog
}
function isCat(animal: ParentAnimal):animal is Cat { // taking class/ obj as type
    return animal instanceof Cat
}

// type guard to check the sound function of dog and cat separately with instanceof operator
function getAnimalSound(animalObj: ParentAnimal){  // we can use ParentAnimal class as "object" type
    // if (animalObj instanceof Dog) { 
     // animalObj instanceof Dog => this can be checked alternatively with a function:: line 88-92 //
    if (isDog(animalObj)) { 
        // call the own method here according to instance // 
        animalObj.makeBark(); 
    } 
    else if (isCat(animalObj)) {
        // specific own methods are suggested automatically
        animalObj.makeMeow(); 
    } 
    else {
        animalObj.makeSound();
    }
}


// create instances of Dog and cat
const dogInstance = new Dog("German Shepherd", "Dog"); // doggo instance
const catInstance = new Cat ("Tortile", "Cat");

// let's get the instance's sound method //
getAnimalSound(dogInstance);
getAnimalSound(catInstance);