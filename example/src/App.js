import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

import '../node_modules/toastr/build/toastr.css';

@inject('ToastrStore')
@observer
export default class App extends Component {
  render () {
    const { ToastrStore } = this.props
    return (
      <div>
        <button onClick={() => {ToastrStore.success('Success', 'This is success message.')}}>Click meh</button>
      </div>
    )
  }
}
