const express = require("express")
const app = express()

const PORT = process.env.PORT || 9000

app.listen(PORT, ()=>{
    console.log("Listening port", PORT)
})

app.use('/', (req, res)=>{
    res.send("HOLA MUNDO")
})