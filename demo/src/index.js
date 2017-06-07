import React, {Component} from 'react'
import {render} from 'react-dom'
import {Card} from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>shipper_components Demo</h1>
      <Card/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
