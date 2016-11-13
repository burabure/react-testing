import React from 'react'
import sd from 'skin-deep'

/**
 * Takes an instantiated Component (via createElement or createFactory)
 * and returns a skin-deep mounted component
 * ComponentInstance => SkinDeepObject
 */
export function skinDeepRender(ComponentInstance) {
  const tree = sd.shallowRender(ComponentInstance)
  return {
    instance: tree.getMountedInstance(),
    vdom: tree.getRenderOutput(),
    tree,
  }
}

/**
 * Takes a React Component, props, and children
 * and returns a skin-deep mounted component
 * (Component, props, children) => SkinDeepObject
 */
export default function render(Component, props, children) {
  return skinDeepRender(React.createElement(Component, props, children))
}

/**
 * Takes a React Component, defaultProps
 * and returns a function that takes props and children
 * and returns a skin-deep mounted component with defaultProps + props
 * (Component, defaultProps) => (props, children) => SkinDeepObject
 */
export function createDefaultPropsRenderer(Component, defaultProps) {
  return (props, children) => render(Component, { ...defaultProps, ...props }, children)
}
