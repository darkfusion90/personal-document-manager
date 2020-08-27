import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import appStore from './store'
import App from './app'

import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementById('root')
)
