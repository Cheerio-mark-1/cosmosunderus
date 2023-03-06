const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.status(200).json({message: "Get successfull enjoy"})
})

app.listen(5173, ()=> {
    console.log("Running On port 5173")
})