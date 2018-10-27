import React from 'react'
import { Provider } from 'mobx-react'
import ReactDOM from 'react-dom'
import ToastrStore from 'mobx-toastr'

import './index.css'
import App from './App'

const options = {
  closeButton: false
}

const Root = (
  <Provider ToastrStore={new ToastrStore(options)}>
    <App />
  </Provider>
)


ReactDOM.render(Root, document.getElementById('root'))
