import React from 'react'
import ReactDOM from 'react-dom'
import ToastrStore from 'mobx-toastr'

import './index.css'
import App from './App'

const options = {
  closeButton: true
}
const toastr = new ToastrStore(options);

ReactDOM.render(
    <App store={toastr}/>,
  document.getElementById('root'))
