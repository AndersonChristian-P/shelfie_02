require("dotenv").config()
const massive = require("massive")
const express = require("express")
const app = express()
const port = 5777

const productCtrl = require("./controller")

const { CONNECTION_STRING } = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance)
  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
})

app.get("/api/inventory", productCtrl.request)
app.post("/api/product", productCtrl.create)

app.delete("/api/product/:id", productCtrl.delete)

app.put("/api/inventory/:id", productCtrl.update)
