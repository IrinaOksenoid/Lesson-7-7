const person = {
    fullName: `Alex`,
    age: 22
    };

function setFullName(newName) {
    this.fullName = newName;
}

const setPersonFullName = setFullName.bind(person, `John Smith`)

setPersonFullName()

console.log(person);

