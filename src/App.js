import React, { Component } from 'react'
import './App.css'

import Spinner from './Components/UI/Spinner'
import Select from './Components/UI/Select'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Playing around with custom UI Components</h1>
        {this.renderSpinner()}
        {this.renderSelect()}
      </div>
    )
  }

  renderSpinner () {
    return (
      <div>
        <h2>SVG Spinner</h2>
        <div>
          <Spinner width='25' height='25' />
          <span>25px</span>
        </div>
        <div>
          <Spinner width='50' height='50' />
          <span>50px</span>
        </div>
        <div>
          <Spinner width='75' height='75' />
          <span>75px</span>
        </div>
      </div>
    )
  }

  renderSelect () {
    return (
      <div>
        <h2>Select</h2>
        <div>
          <Select
            options={[
              { value: 1, label: 'Option 1' },
              { value: 2, label: 'Option 2' },
              { value: 3, label: 'Option 3' },
              { value: 4, label: 'Option 4' }
            ]}
          />
          <Select
            options={[
              { value: 1, label: 'Foo' },
              { value: 2, label: 'Bar' },
              { value: 3, label: 'Baz' },
              { value: 4, label: 'Fizz' },
              { value: 5, label: 'Buzz' },
              { value: 6, label: 'FizzBuzz' },
              { value: 7, label: 'FizzBuzzFooBarBazz' }
            ]}
          />
        </div>
      </div>
    )
  }
}

export default App
