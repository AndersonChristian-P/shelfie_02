import React, { Component } from "react"

import "./Product.css"

export default class Product extends Component {
  constructor() {
    super()

    this.state = {

    }
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
        </div>

      </div>
    )
  }
}