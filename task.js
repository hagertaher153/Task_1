import express from 'express';

const app = express();
const students =[
    {
        id: 1,
        name:'Hager',
        city:'Shebeen'
    },
    {
        id: 2,
        name:'Sally',
        city:'Tanta'
    },
    {
        id: 3,
        name:'Aya',
        city:'Banha'
    },
    {
        id: 4,
        name:'Samr',
        city:'Tanta'
    }
]

const studentsFunction3 = (request , response) =>{

    let output = "<ul>"
    for(let i = 0 ; i<students.length ; i++){
        const student = students[i]
        output += "<li>" + student.name + "</li>"
    }
    output += "</ul>"

    response.send(output)
}
app.get('/students',studentsFunction3)

app.listen(8000);