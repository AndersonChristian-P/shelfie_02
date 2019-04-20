const express = require("express")
const app = express()
const port = 5777

const productCtrl = require("./controllers/controller")

app.use(express.json())

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
