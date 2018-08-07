import React from 'react'
import './index.scss'

class Header extends React.Component {
  handleClick = () => {
    console.log('123')
  }
  render() {
    return (
      <div className="header">
        <Controller handleClick={this.handleClick}/>
        <div className="header-half-left" />
        <div className="header-half-right" />
      </div>
    )
  }
}
export default Header

class Controller extends React.Component {
  render() {
    const { handleClick } = this.props
    return(
      <div className="header-controller" onClick={handleClick} />
    )
  }
}