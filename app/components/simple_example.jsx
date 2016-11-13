import React, { PropTypes } from 'react'


const SimpleExample = ({ message }) => <h1>{message}</h1>


SimpleExample.propTypes = {
  message: PropTypes.string,
}

export default SimpleExample
