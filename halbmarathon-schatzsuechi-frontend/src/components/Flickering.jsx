import React from "react"
import { colorizeCharArray } from "../lib/random"
import random from "random"

class Flickering extends React.PureComponent {
  isOn = false

  _getNextTimeout() {
    return this.isOn ? random.int(100, 1000) : random.int(2000, 5000)
  }

  _setTimeout() {
    this._timeout = setTimeout(() => {
      this.isOn = !this.isOn
      this._setTimeout()
      this.forceUpdate()
    }, this._getNextTimeout())
  }

  componentDidMount() {
    this._setTimeout()
  }

  componentWillUnmount() {
    if (this._timeout) {
      clearTimeout(this._timeout)
    }
  }

  render() {
    const { children } = this.props
    if (typeof children !== "string") {
      throw new Error("<Flickering/> accepts only pure strings as children")
    }

    return (
      <span>
        {!this.isOn
          ? children
          : colorizeCharArray([...children], { useSpecialChar: true, p: 0.1 })}
      </span>
    )
  }
}

export default Flickering
