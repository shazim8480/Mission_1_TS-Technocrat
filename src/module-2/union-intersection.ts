
// accept either type of data //

type NoobDev = {
    name: string
}

// junior dev will also have the properties of a NoobDev ===> // intersection //

type JuniorDev = NoobDev & {
    experience: number,
    skills : string
}

// another example with enum
enum Level {
    junior = "junior",
    mid = "mid",
    senior = "senior",
} // using enum is not THE BEST PRACTICE, USE UNION TYPE instead.

type NextDev = JuniorDev & {
    leaderShipExp : boolean,
    // level : Level // enum type
    level : "junior" | "mid" | "senior" // union type
}

// selected Dev will either be noobDev, or juniorDev ==> // union type //
const selectedDev : NoobDev | JuniorDev = {
    name : "John Doe",
    experience : 0.5,
    skills : "JS"
}

// new dev
const professionalDev : NextDev  = {
    name : "Doe",
    experience: 5,
    skills: "Full-stack",
    leaderShipExp: true,
    // level : Level.senior, // accessing enum type
    level : "senior", // accessing union type
}