const express = require("express")
const router = express.Router()
router.get("/test", function (req, res) {
    const name=req.body.name
    res.status(200).send({message: "ciao!" + name}) //def path test 3-5
})

const server = express()
server.use(express.json()) //prende input json
server.use(router)
server.listen(3001, () => { console.log("running on port 3001") }) // ultima cosa da inserire
