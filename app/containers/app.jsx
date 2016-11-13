import React from 'react'
import CounterList from 'containers/counter_list'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counters: [
        { increment: 10, color: 'red' },
        { increment: 100, color: 'purple' },
      ],
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      counters: [
        ...this.state.counters,
        { increment: 1, color: 'blue' },
      ],
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>+</button>
        <CounterList counters={this.state.counters} />
      </div>
    )
  }
}
