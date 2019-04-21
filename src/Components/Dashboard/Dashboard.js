import React, { Component } from "react"

import Product from "../Product/Product"
import axios from "axios";

export default class Dashboard extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  handleDelete = (id) => {
    axios.delete(`/api/product/${id}`)
      .then(this.props.getInventory)
  }

  render() {

    const list = this.props.inventory.map((item, i) => {
      return <Product key={i} item={item} handleDelete={this.handleDelete} getProductToEdit={this.props.getProductToEdit} />
    })

    return (
      <div className="dashboard">
        {list}
      </div>
    )
  }

}