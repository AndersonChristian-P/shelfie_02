import React, { Component } from "react"

import Product from "../Product/Product"

export default class Dashboard extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {

    const list = this.props.inventory.map((item, i) => {
      return <Product key={i} item={item} />
    })

    return (
      <div className="dashboard">
        {list}
      </div>
    )
  }

}