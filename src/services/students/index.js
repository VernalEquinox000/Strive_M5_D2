const express = require("express")
const fs = require("fs")
const path = require ("path")

const router = express.Router()

router.get("/", (req, res) => {
    //const name=req.body.name
    res.send("ciao!")
    

    //console.log(__dirname)
    /* console.log("cazzituoi")
    console.log(path.join(__dirname, "students.json")) */
})

module.exports = router

