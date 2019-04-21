module.exports = {

  request: (req, res) => {
    const db = req.app.get("db")
    db.get_inventory()
      .then(response => {
        res.status(200).send(response)
      })
      .catch(err => {
        console.log(`GET err ${err}`)
      })
  },

  create: (req, res) => {
    const db = req.app.get("db")
    let { name, price, image } = req.body
    db.create_product([name, price, image])
      .then(response => {
        res.status(200).send(response)
      })
      .catch(err => {
        console.log(`CREATE err ${err}`)
      })
  },

  delete: (req, res) => {
    const db = req.app.get("db")
    let { id } = req.params
    db.delete_product([id])
      .then(response => {
        res.status(200).send(response)
      })
      .catch(err => {
        console.log(`DELETE err ${err}`)
      })
  },

  update: (req, res) => {
    const db = req.app.get("db")
    let { id } = req.params
    let { name, price, image } = req.body
    db.update_product([id, name, price, image])
      .then(response => {
        res.status(200).send(response)
      })
      .catch(err => {
        console.log(`PUT err ${err}`)
      })
  }

}