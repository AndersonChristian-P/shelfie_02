import React, { Component } from "react"

export default class Form extends Component {
  constructor() {
    super()

    this.state = {
      image: "",
      name: "",
      price: 0,
    }
  }

  handleChange = (event) => {
    let { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleClickCancel = () => {
    this.setState({
      image: "",
      name: "",
      price: 0,
    })
  }

  render() {
    return (
      <div>

        <div className="form-product-image" >
          <img
            src={this.state.image}
            alt="product"
          />
        </div>

        <div className="form-product-image-url"> Image URL:
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            name="image"
            value={this.state.image}
          />
        </div>

        <div className="form-product-name"> Product Name:
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
          />
        </div>

        <div className="form-product-price"> Price:
          <br />
          <input
            onChange={this.handleChange}
            type="number"
            name="price"
            value={this.state.price}
          />
        </div>

        <div className="form-buttons">
          <button onClick={this.handleClickCancel} className="form-button-cancel">Cancel</button>
          <button className="form-button-add">Add to Inventory</button>
        </div>


      </div>
    )
  }
}


// I think one of these is the code to reference a default image
// onError = "/images/image-not-available.png"
// onError="this.src='/images/image-not-available.png'"