import React from 'react'

export default class Select extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      options: null,
      selected_option: null,
      visible: false
    }
  }

  componentWillMount () {
    this.setState({
      options: this.props.options,
      selected_option: this.props.options.length
        ? this.props.options[0]
        : { value: '', label: '...' }
    })
  }

  render () {
    return (
      <div style={styles.container}>
        <div
          style={styles.selectedOptionField}
          onClick={() => this.toggleDropdown()}
        >
          <span>{this.state.selected_option.label}</span>
          <input type='button' value='v' />
        </div>

        {this.renderHTMLSelect()}
        <span
          style={{
            visibility: this.state.visible ? 'visible' : 'hidden',
            display: 'block',
            backgroundColor: 'lightgray',
            padding: 3,
            marginTop: 3,
            zIndex: this.state.visible ? 99 : 1,
            position: 'relative'
          }}
        >
          {this.state.options &&
            this.state.options.map(
              option =>
                (option.value !== 0
                  ? <span
                    key={option.value}
                    style={{ display: 'block' }}
                    onClick={() => this.changeSelection(option)}
                    >
                    {option.label}
                  </span>
                  : null)
            )}
        </span>
      </div>
    )
  }

  renderHTMLSelect () {
    return (
      <select
        style={{ display: 'none' }}
        value={this.state.selected_option && this.state.selected_option.value}
        onChange={() => {}}
      >
        {this.state.options &&
          this.state.options.map(option => (
            <option
              key={option.value}
              value={option.value}
              style={{ display: 'block' }}
            >
              {option.label}
            </option>
          ))}
      </select>
    )
  }

  toggleDropdown () {
    this.setState({ visible: !this.state.visible })
  }

  changeSelection (option) {
    this.setState({
      selected_option: option,
      visible: false
    })
  }
}

const styles = {
  container: {
    border: '1px solid grey',
    margin: 5,
    height: '22px',
    padding: 5,
    float: 'left',
    minWidth: '10%',
    width: 'auto'
  },
  selectedOptionField: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}
