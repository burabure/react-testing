import { assert } from 'chai'
import { createDefaultPropsRenderer } from 'utils/skin-deep-helpers'
import Counter from 'containers/counter'


const defaultProps = {
  color: '',
  increment: 0,
}
const render = createDefaultPropsRenderer(Counter, defaultProps)


describe('containers/counter', () => {
  describe('render', () => {
    it('renders an Count w/props, with count starting from 0', () => {
      const counterProps = {
        color: 'red',
        increment: 100,
      }
      const { tree } = render(counterProps)
      const count = tree.subTree('Count')

      assert.notEqual(count, false)
      assert.deepEqual(count.props, { ...counterProps, count: 0 })
    })
  })

  describe('when setInterval ticks', () => {
    it('increments current count', () => {
      let callback = null
      global.setInterval = (fn) => { callback = fn }
      const increment = 100
      const { tree } = render({ increment })
      const currentCount = () => tree.subTree('Count').props.count

      assert.equal(currentCount(), 0)

      callback()
      assert.equal(currentCount(), increment)

      callback()
      assert.equal(currentCount(), increment * 2)
    })
  })

  describe('when componentWillUnmount is called', () => {
    it('clears the interval', () => {
      let interval = null
      global.clearInterval = (arg) => { interval = arg }
      const { instance } = render()

      instance.componentWillUnmount()

      assert.equal(interval, instance.interval)
    })
  })
})
