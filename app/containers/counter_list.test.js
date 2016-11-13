import { assert } from 'chai'
import { createDefaultPropsRenderer } from 'utils/skin-deep-helpers'
import CounterList from 'containers/counter_list'


const render = createDefaultPropsRenderer(CounterList, {
  counters: [],
})

describe('containers/counter_list', () => {
  describe('render', () => {
    describe('with valid counters', () => {
      it('renders a Counters w/props for each counter', () => {
        const countersProps = [
          { increment: 5, color: 'red' },
          { increment: 1, color: 'purple' },
        ]
        const { tree } = render({ counters: countersProps })
        const counters = tree.everySubTree('Counter')

        assert.equal(counters.length, 2)
        assert.deepEqual(counters[0].props, countersProps[0])
        assert.deepEqual(counters[1].props, countersProps[1])
      })
    })

    describe('with empty counters', () => {
      it('doesn\'t render any Counters', () => {
        const { tree } = render({ counters: [] })
        const counters = tree.everySubTree('Counter')

        assert.equal(counters.length, 0)
      })
    })
  })
})
