const express = require("express")
const logger = require("./middelware/logger")
const members = require("./members")

const app = express()

app.use(express.static(__dirname + "/public"))

app.use(logger)

const PORT = 5000

app.listen(PORT, (err) => {
    err ? console.log(err)
        : console.log(`Server running on port ${PORT}`)
})

app.get("/members", (req, res) => {
    res.json(members)
})

app.get("/members/:id", (req, res) => {
    res.json(members.filter(member => member.id === parseInt(req.params.id)))
})