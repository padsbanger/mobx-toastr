import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

import '../node_modules/toastr/build/toastr.css';

@inject('ToastrStore')
@observer
export default class App extends Component {
  render () {
    const { ToastrStore } = this.props
    console.log(ToastrStore);
    return (
      <div>
        <button onClick={() => {ToastrStore.message('Error', 'error', 'error')}}>Click meh</button>
      </div>
    )
  }
}
