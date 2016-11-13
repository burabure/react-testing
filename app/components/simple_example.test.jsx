import React from 'react'
import { assert } from 'chai'
import { shallowRender } from 'skin-deep'
import SimpleExample from 'components/simple_example'


describe('containers/simple_example', () => {
  describe('render', () => {
    it('renders an <h1> with a message', () => {
      const message = 'Foo Bar'
      const tree = shallowRender(<SimpleExample message={message} />)
      const h1 = tree.subTree('h1')

      assert.notEqual(h1, false)
      assert.equal(h1.text(), message)
    })
  })
})
