import { assert } from 'chai'
import { createDefaultPropsRenderer } from 'utils/skin-deep-helpers'
import Count from 'components/count'


const defaultProps = {
  count: 0,
  color: '',
  increment: 0,
}
const render = createDefaultPropsRenderer(Count, defaultProps)


describe('components/count', () => {
  describe('render', () => {
    it('renders an h1 with color and counter text', () => {
      const counterProps = {
        count: 1,
        color: 'red',
        increment: 10,
      }
      const { tree } = render(counterProps)

      assert.equal(tree.type, 'h1')
      assert.equal(tree.props.style.color, counterProps.color)
      assert.equal(tree.text(), 'Counter (10): 1')
    })

    describe('when count is less than 1000', () => {
      it('displays count', () => {
        const count = 999
        const { tree } = render({ count })

        assert.match(tree.text(), /999$/)
      })
    })

    describe('when count is 1000', () => {
      it('displayed count is \'1k\'', () => {
        const count = 1000
        const { tree } = render({ count })

        assert.match(tree.text(), /1k$/)
      })
    })

    describe('when count is greater than 1000', () => {
      it('displays count using notation', () => {
        const count = 1100
        const { tree } = render({ count })

        assert.match(tree.text(), /1\.1k$/)
      })
    })
  })
})
