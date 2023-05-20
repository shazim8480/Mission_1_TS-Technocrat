type Volume = {
    height: number,
    width: number,
    depth: number,
}

// lookup type //
type A = Volume['height']
 
// union type
type B = keyof Volume

// create type through mapping from previous type >> Volume
type MappedType <T> = {
    // normal e.g
    // [key in keyof Volume] : string 
    
    // if the mappedArea depends on the changes of the volume type ===>
    // [key in keyof Volume]: Volume[key]
    
    // Let's make the upper line more generic
    readonly [key in keyof T]: T[key] // strict & const

} 

// we'll map through the UserInfo type here
type UserInfo = {
    name : string,
    mobile: number,
}

// result
const newUser : MappedType<UserInfo> = ({name : "Adnan", mobile: 1234})