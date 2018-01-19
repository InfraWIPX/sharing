import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './statics/css/bootstrap/bootstrap.min.css'
import './statics/css/Global.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
