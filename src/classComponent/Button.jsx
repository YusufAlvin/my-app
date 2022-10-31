import PropTypes from 'prop-types'
import React from "react"

class Button extends React.Component {
  render(){
    return <button className="button" onClick={this.props.onClick}>{this.props.label}</button>
  }
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  label: 'Label',
  onClick: () => {},
}

export default Button