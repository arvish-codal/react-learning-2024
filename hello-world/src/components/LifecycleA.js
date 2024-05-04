import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Arvish'
      }
      console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
    
  render() {
    console.log('LifeCycleA render')
    return (
      <div>
      <div>LifeCycleA</div>
      <LifeCycleB />
      </div>
    )
  }
}

export default LifecycleA
