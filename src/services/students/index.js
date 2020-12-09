const express = require("express") //1 3rd party module
const fs = require("fs") //7 nodejs.org documentation, core module
const path = require("path") //8 other req core module
const uniquid = require("uniqid") //24

const router = express.Router() //2

//1.router.get("/")
router.get("/", (req, res) => { //4
    //handler
    /* console.log(__dirname) */ //tell current folder //9
    //send something from postman to see this
/* console.log(path.join(__dirname, "students.json"))  *///10
    const studentsFilePath = path.join(__dirname, "students.json")//11
    const fileAsBuffer = fs.readFileSync(studentsFilePath); //12
    //returns a buffer (machine readable, not human)
    /* console.log(fileAsBuffer.toString()) */ //13
    const fileAsString=fileAsBuffer.toString() //13bis
    //let's convert buffer into something readable

    //a) retrive list from a file on disk, because no db yet
    //b) i want to send list as a response but in JSON
    /* console.log(JSON.parse(fileAsBuffer.toString())) */ //15
    const fileAsJSObject = JSON.parse(fileAsString) //15 bis
    /* console.log(req) */ //6 
/* res.send("list of users route") */ //5
    /* res.send(fileAsBuffer.toString()) */ //14
/* res.send(JSON.parse(fileAsBuffer.toString())) */ //16
    res.send(fileAsJSObject) //16bis
})


//2.router.get("/:id")
router.get("/:identifier", (req, res) => { //4
/* console.log(req) */ //6
    //BELOW: lines copied from 1.router.get
    const studentsFilePath = path.join(__dirname, "students.json")//11
    const fileAsBuffer = fs.readFileSync(studentsFilePath); //12
    const fileAsString = fileAsBuffer.toString() //13bis
    const studentsArray = JSON.parse(fileAsString)//17
    const idFromRequest = req.params.identifier //19
    console.log("--->", idFromRequest) //20 //in postman, add id to the address
    const student = studentsArray.filter(student => student.ID === idFromRequest)//18
    console.log("student", student) //19
    res.send("single user route") //5 
})

//3.router.post("/")
router.post("/", (req, res) => { //4
/* console.log(req) */ //6
    //BELOW: lines copied from 2.router.get
    //(1) read the old content from file
    const studentsFilePath = path.join(__dirname, "students.json")//11
    const fileAsBuffer = fs.readFileSync(studentsFilePath); //12
    const fileAsString = fileAsBuffer.toString() //13bis
    const studentsArray = JSON.parse(fileAsString)//17

    //(2) push new to studentsArray

    //(2.1) let's create an id

    const newStudent = req.body //20
    console.log(newStudent) //21
    //in postman: body>raw>JSON
    studentsArray.push(newStudent) //22
    console.log(studentsArray) //23

    //(3) replace old content

    res.send("create users route") //5
})

//4.router.put("/:id")
router.put("/:id", (req, res) => { //4
    /* console.log(req) */ //6 
    res.send("put users route") //5
})

//5.router.delete("/:id")
router.delete("/:id", (req, res) => { //4
    /* console.log(req) */ //6 
    res.send("delete users route") //5
})

module.exports = router //3

