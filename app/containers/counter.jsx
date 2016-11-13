import React from 'react'
import Count from 'components/count'


export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    this.setState({
      count: this.state.count + this.props.increment,
    })
  }

  render() {
    return (
      <Count
        count={this.state.count}
        color={this.props.color}
        increment={this.props.increment}
      />
    )
  }
}

const { string, number } = React.PropTypes
Counter.propTypes = {
  increment: number.isRequired,
  color: string.isRequired,
}
