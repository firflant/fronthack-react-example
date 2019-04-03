import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// This is an entrypoint for the Fronthack development scripts. If you remove
// it, you will loose the ability to use a following tools: design overlay and
// canvas, which are described here: http://docs.fronthack.com/en/recognition
(process.env.NODE_ENV === 'development') && import('fronthack-scripts')
