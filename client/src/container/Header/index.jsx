import React from 'react'
import './index.scss'

class Header extends React.Component {
  handleClick = () => {

  }
  render() {
    return (
      <div className="header">
        <Controller 
          handleClick={this.handleClick}
          wraperRef={ref => this.controllerRef = ref}
        />
        <div className="header-half-left" />
        <div className="header-half-right" />
      </div>
    )
  }
}
export default Header

class Controller extends React.Component {
  render() {
    const { handleClick, wraperRef } = this.props
    return(
      <div
        className="header-controller"
        onClick={handleClick}
        ref={ref => wraperRef(ref)}
      />
    )
  }
}