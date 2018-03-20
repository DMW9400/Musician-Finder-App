import React from 'react'
import User from './User'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {

  render(){
    return(
      <header className="nav-wrapper">
        <nav>
          <ul>
            <p>"NAV TEST"</p>
            <p>"NAV TEST 2"</p>
            <p>"NAV TEST 3"</p>
          </ul>
        </nav>
      </header>
    )
  }

}
