import React, { Component } from 'react'
import { observer } from 'react-mobx';

@observer
export default class App extends Component {
  render () {
    console.log(this);
    return (
      <div>
        stuff
      </div>
    )
  }
}
