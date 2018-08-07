import React from 'react'
import { tween } from 'popmotion';
import { MotionValue } from 'popmotion-react';
import './index.scss'

class Header extends React.Component {
  handleClick = () => {
    console.log('123')
  }
  render() {
    return (
      <div className="header">
        <MotionValue
          onStateChange={{
            on: ({ value }) => tween({
              from: value.get(),
              to: 100
            }).start(value),
            off: ({ value }) => tween({
              from: value.get(),
              to: 0
            }).start(value)
          }}
        >
          {({ v, state, setStateTo }) => (
            <div
              style={{
                background: 'red',
                width: '100px',
                height: '100px',
                transform: 'translateX(' + v + 'px)'
              }}
              onClick={(state === 'on') ? setStateTo.off : setStateTo.on}
            />
          )}
        </MotionValue>
        <Controller 
          handleClick={this.handleClick}
          // style={{
          //   height: 
          // }}
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