import React, { Component } from "react"

import "./Form.css"
import axios from "axios";

export default class Form extends Component {
  constructor() {
    super()

    this.state = {
      image: "",
      name: "",
      price: 0,
      buttonText: "Add to Inventory",
      productToEdit: null
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.productToEdit !== prevProps.productToEdit) {
      this.setState({
        name: this.props.productToEdit.name,
        image: this.props.productToEdit.img,
        price: this.props.productToEdit.price,
        buttonText: "Save Changes",
        productToEdit: this.props.productToEdit
      })
    }
  }

  saveChangedProduct = (product) => {
    let newProduct = {
      name: this.state.name,
      image: this.state.image,
      price: this.state.price
    }
    axios.put(`/api/inventory/${product.productToEdit.id}`, newProduct)
      .then(this.props.getInventory)
    this.handleClickCancel()
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
      buttonText: "Add to Inventory",
      productToEdit: null
    })
  }

  handleClickAdd = () => {
    let body = this.state
    axios.post("/api/product", body)
      .then(this.props.getInventory)
    this.handleClickCancel()
  }


  render() {
    return (
      <div className="form">

        <div>
          <img
            className="form-product-image"
            width="297"
            src={this.state.image}
            onError={(e) => { e.target.onerror = null; e.target.src = "/images/image-not-available.png" }}
            alt="product"
          />
        </div>

        <form>
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
        </form>

        <div className="form-buttons">
          <button onClick={this.handleClickCancel} className="form-button cancel">Cancel</button>

          {
            this.state.productToEdit ?
              <button onClick={() => this.saveChangedProduct(this.state)} className="form-button add">{this.state.buttonText}</button> :
              <button onClick={this.handleClickAdd} className="form-button add">{this.state.buttonText}</button>
          }

        </div>


      </div >
    )
  }
}

