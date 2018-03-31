let express = require("express")
let app = express()
let port = 3001

// static route
app.use(express.static(__dirname + "/public"));

app.use("*", require("./app/routes/default"));

app.listen(port, () => {
    console.log(`server running at port ${port}`)
})