import React, { PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class ParentComp extends PureComponent {
  
    constructor(props) {
    super(props)
  
    this.state = {
       name: 'Arvish'
    }
  }

  componentDidMount() {
    setInterval(() => {
        this.setState({
            name: 'Arvish'
        })
    }, 2000)
  }
  
  render() {
    console.log('************ PARENT COMP RENDER ************')
    return (
      <div>
        Parent Component
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    )
  }
}

export default ParentComp
