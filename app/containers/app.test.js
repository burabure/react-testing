import { assert } from 'chai'
import render from 'utils/skin-deep-helpers'
import App from 'containers/app'

const newCounter = { increment: 1, color: 'blue' }
const defaultCounters = [
  { increment: 10, color: 'red' },
  { increment: 100, color: 'purple' },
]


describe('containers/app', () => {
  describe('render', () => {
    it('renders a CounterList w/props', () => {
      const { tree } = render(App)
      const counterList = tree.subTree('CounterList')

      assert.notEqual(counterList, false)
      assert.deepEqual(counterList.props, { counters: defaultCounters })
    })

    it('renders a button with text', () => {
      const { tree } = render(App)
      const button = tree.subTree('button')

      assert.notEqual(button, false)
      assert.equal(button.text(), '+')
    })
  })

  describe('when clicking the button', () => {
    it('adds a counter', () => {
      const { tree } = render(App)
      const button = tree.subTree('button')
      const passedCounters = () => tree.subTree('CounterList').props.counters

      assert.deepEqual(passedCounters(), defaultCounters)

      // add one
      button.props.onClick()

      assert.deepEqual(passedCounters(), [
        ...defaultCounters,
        newCounter,
      ])

      // add one more
      button.props.onClick()

      assert.deepEqual(passedCounters(), [
        ...defaultCounters,
        newCounter,
        newCounter,
      ])
    })
  })
})
