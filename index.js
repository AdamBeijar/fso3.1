const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")

app.use(cors())
app.use(express.json())
morgan.token("json", function (req, res){return JSON.stringify(req.body)})
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :json"))
const generateId = () => {
    return Math.floor(Math.random() * 10000)
}
const alreadyExists = (personName) => {
    let foundPerson = false;
    persons.forEach(person => {
        if(person.name === personName){
            foundPerson = true
        }
    })
    return foundPerson
}
let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]
app.get("/", (request, response) => {
    response.send("<h1>Hello world!</h1>")
})

app.get("/persons", (request, response) => {
    console.log("I give everything")
    response.json(persons)
})

app.post("/persons", (request, response) => {
    const body = request.body
    if(!body.name){
        return response.status(400).json({
            error: "name missing"
        })
    } else if(!body.number){
        return response.status(400).json({
            error: "number missing"
        })
    } else if(alreadyExists(body.name)){
        return response.status(400).json({
            error: "name already exists"
        })
    } else {
        const person = {
            id: generateId(),
            name: body.name,
            number: body.number
        }
        persons = persons.concat(person)
        response.json(person)
    }
})

app.get("/persons/:id", (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if(person){
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete("/persons/:id", (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id === id)
    response.status(204).end()
})

app.get("/info", (request, response) => {
    const numOfPeople = persons.length
    const datetime = new Date()
    response.send(`<p>Phonebook has infro for ${numOfPeople} people</p>
                        <p>${datetime}</p>`)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)