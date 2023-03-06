const app = require('./express')
const main = require('./connection/connect')

main().catch(err => console.log(err))

app.listen(8000, () => {
    console.log("Running on port 8000");
})
