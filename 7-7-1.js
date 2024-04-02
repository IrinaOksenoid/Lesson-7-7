function printInfo(){
    console.log(`Name: ${this.name}, Age: ${this.age}`)
}

const person = {
    name: `Mary`,
    age: 22
    }
    
printInfo.call(person);

