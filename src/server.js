const express = require("express") //1
const cors = require ("cors")
const studentsRoutes = require("./services/students") //5
const server = express() //2

const port = 3001 //3

server.use(cors())
server.use(express.json()) //7 added for POST purpose of reading 
//the JSON input, otherwise request body will be undefined
//MUST GO BEFORE ROUTES!

server.use("/students", studentsRoutes) //6 grab

server.listen(port, () => { //4
    console.log("Server is running on port: ", port)
})