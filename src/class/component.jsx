import React from 'react'
import PropTypes from 'prop-types'

//mounting(componentDidMount) chạy constructor -> render => react updates DOM and refs -> componentDidMount
//updating(componentDidUpdate) chạy render => react updates DOM and refs -> componentDidUpdate
//unmounting(componentWillUnmount)

//constructor: là phương thức chạy đầu tiên khi component khởi tạo, chạy trước khi component được mount(render hết UI)
//inheritance: kế thừa (extend)
//composition: tính tái sử dụng

const list = [0, 1, 2]
const fetch = () => {
  return new Promise((resolve) => {
    resolve(list)
  }, 1000)
}
const array = [
  { id: 1, name: 'b' },
  { id: 2, name: 'c' },
  { id: 3, name: 'a' }
]
class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: { created: new Date().toLocaleTimeString() },
      seconds: { created: new Date().getSeconds() },
      list: [],
      darkMode: false,
      arrays: array
    }
    this.day = '123'
  }
  componentDidMount() {
    this.setState({
      ...this.state,
      time: { created: '123' }
    })
    fetch().then((res) => this.setState((pre) => ({ ...pre, list: res })))
  }
  componentDidUpdate() {
    // if (this.state.darkMode) {
    //   console.log(1)
    // }
  }
  getTime = () => {
    const newState = {
      ...this.state,
      time: { created: new Date().toLocaleTimeString() }
    }
    this.setState(newState)
  }
  toggle = () => {
    this.setState((pre) => ({ ...pre, darkMode: !pre.darkMode }))
  }
  sortArray = () => {
    this.setState((pre) => ({
      arrays: pre.arrays.sort((a, b) => {
        if (a.name < b.name) return -1
        if (a.name < b.name) return 1
        return 0
      })
    }))
  }
  render() {
    console.log(this.state)
    const { type, ...props } = this.props
    return (
      <div>
        {this.state.arrays.map(({ id, name }) => (
          <div key={id}>{name}</div>
        ))}
        <div {...props}>{this.state.time.created}</div>
        <div>{this.state.seconds.created}</div>
        <div>{this.day}</div>
        <button onClick={this.getTime}>getTime</button>
        <button onClick={this.toggle}>Toggle</button>
        <button onClick={this.sortArray}>Sort</button>
      </div>
    )
  }
}

Test.propTypes = {
  type: PropTypes.string
}

export default Test
