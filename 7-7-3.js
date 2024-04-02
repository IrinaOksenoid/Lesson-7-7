const students = [
    {
     name: `Ann`,
     age: 15
    },
    {
     name: `Mary`,
     age: 18
    },
    {
     name: `Kate`,
     age: 21
    },
    {
     name: `Jane`,
     age: 16
    }
 ]
 
 const filteredStudents = students.filter((student) => {
     return student.age >=18; 
 });
 
 console.log(filteredStudents);