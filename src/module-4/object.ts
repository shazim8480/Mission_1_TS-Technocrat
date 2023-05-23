// class Animal {
//     name: string;
//     species: string;
//     sound: string;

//     constructor(name: string, species: string, sound: string){
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }

//    methods
//     makeSound(){
//         console.log(`The ${this.name} ${this.species} says ${this.sound}`);
//     }
// }

// const cat = new Animal ("calico", "cat", "meaw")
// cat.makeSound();


// type + initialize together with "public" keyword and parameter properties//

class Animal {
    // parameter properties
 constructor(
    public name: string, 
    public species: string, 
    public sound: string)
    {}
    // methods
    makeSound(){
        console.log(`The ${this.name} ${this.species} says ${this.sound}`);
    }
}

const cat = new Animal ("calico", "cat", "meaw")
// cat.makeSound();