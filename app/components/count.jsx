import React from 'react'


const withNotation = num => (num >= 1000 ? `${num / 1000}k` : num)

const Count = ({
  count,
  color,
  increment,
}) =>
  <h1 style={{ color }}>
    Counter ({ increment }): {withNotation(count)}
  </h1>


const { string, number } = React.PropTypes
Count.propTypes = {
  count: number.isRequired,
  color: string.isRequired,
  increment: number.isRequired,
}

export default Count
