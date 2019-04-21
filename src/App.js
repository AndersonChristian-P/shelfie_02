import React, { Component } from 'react';

import './App.css';

import Header from "./Components/Header/Header"
import Dashboard from "./Components/Dashboard/Dashboard"
import Form from "./Components/Form/Form"
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [],
      productToEdit: null
    }
  }

  getInventory = () => {
    axios.get("/api/inventory")
      .then(res => {
        this.setState({
          inventory: res.data
        })
        console.log(res.data)
      })
      .catch(err => {
        console.log(`GET axios err ${err}`)
      })
  }

  componentDidMount() {
    this.getInventory()
  }

  render() {
    return (
      <div className="App">
        <Header className="header" />

        <div className="user-display">
          <Dashboard
            inventory={this.state.inventory}
            getInventory={this.getInventory}
          />

          <Form
            getInventory={this.getInventory}
            productToEdit={this.state.productToEdit}
          />

        </div>

      </div>
    );
  }
}

export default App;
