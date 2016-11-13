/* global document */
import React from 'react'
import ReactDOM from 'react-dom'
import App from 'containers/app'


const mountNode = document.getElementById('appRoot')
ReactDOM.render(<App />, mountNode)
