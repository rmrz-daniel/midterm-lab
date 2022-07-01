import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class TestPage extends Component {
  render() {
    return (
      <div>
        <p>This is a test page to show case functionality of page routing</p>
        <Link to="/">go back to Student list</Link>
        </div>
    )
  }
}
