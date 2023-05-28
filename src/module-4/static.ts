// static in Class

class Counter {
    // counter : number // without using static
    // ************** //
    // constructor(counter : number) {
    //     this.counter = counter;
    // }
     // *** NOTE: To keep the counter STATIC in every instance, we have to remove the constructor and add "static" before the counter

    // ***** using STATIC ***** //
    static count : number = 0; // be default, value will be 0

    // methods
    static increment(): number {
        // return this.counter += 1; // no longer accessible without constructor //
        return Counter.count += 1; // use fixed static property instead 
    }

    static decrement(): number {
        // return this.counter -= 1; // no longer accessible without constructor //
        return Counter.count -= 1; // use fixed static property instead 
    }
}

// const instance1 = new Counter(0);
const instance1 = new Counter(); // without constructor
// const instance2 = new Counter(1);
const instance2 = new Counter(); // without constructor
// **** separate memory created for each instance ****** //

// console.log(instance1.increment()); // 0 + 1 = 1
// console.log(instance2.increment()); // 1 + 1 = 2

// access using Class
console.log(Counter.increment()); // 0 + 1 = 1
console.log(Counter.increment()); // 1 + 1 = 2
