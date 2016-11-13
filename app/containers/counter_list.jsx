import React from 'react'
import Counter from 'containers/counter'


const CounterList = ({ counters }) =>
  <div>
    {counters.map(({ increment, color }, index) =>
      <Counter
        key={index}
        {...{ increment }}
        {...{ color }}
      />)}
  </div>


const { arrayOf, shape, string, number } = React.PropTypes
CounterList.propTypes = {
  counters: arrayOf(shape({
    increment: number.isRequired,
    color: string.isRequired,
  })).isRequired,
}

export default CounterList
