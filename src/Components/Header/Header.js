import React, { Component } from "react"

import "./Header.css"

export default class Header extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <header>
          <img width="165" src="./images/shelfie.png" alt="logo" />
        </header>
      </div>
    )
  }
}