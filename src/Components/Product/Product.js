import React, { Component } from "react"

import "./Product.css"

export default class Product extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  handleDeleteClick = (id) => {
    this.props.handleDelete(id)
  }

  render() {

    let { item } = this.props

    return (
      <div className="dashboard-product">
        <img width="200" src={item.img} alt="product" />

        <div className="dashboard-desc">
          <div>
            <div>{item.name}</div>
            <div>{`$${item.price}`}</div>
          </div>

          <div className="dashboard-buttons">
            <button onClick={() => this.handleDeleteClick(item.id)} className="dashboard-button">Delete</button>
            <button className="dashboard-button">Edit</button>
          </div>
        </div>

      </div>
    )
  }
}