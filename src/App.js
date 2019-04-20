import React, { Component } from 'react';

import './App.css';

import Header from "./Components/Header/Header"
import Dashboard from "./Components/Dashboard/Dashboard"
import Form from "./Components/Form/Form"

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [
        {
          name: "shoes",
          price: 5,
          img: "https://assets.adidas.com/images/h_600,f_auto,q_auto:sensitive,fl_lossy/6a8f277daf5f4748a739a998016785f4_9366/Asweerun_Shoes_White_F36340_01_standard.jpg"
        },
        {
          name: "socks",
          price: 11,
          img: "https://images.express.com/is/image/expressfashion/0006_01175481_0098?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon"
        },
        {
          name: "shirts",
          price: 23,
          img: "https://gloimg.rglcdn.com/rosegal/pdm-product-pic/Clothing/2018/09/28/goods-img/1546624752690648515.jpg"
        }]
    }
  }

  render() {
    return (
      <div className="App">
        <Header />

        <div className="user-display">
          <Dashboard inventory={this.state.inventory} />
          <Form />
        </div>

      </div>
    );
  }
}

export default App;
