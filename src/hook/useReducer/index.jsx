import React from 'react'

//useReducer là một hook dùng để gom logic "useState" lại với nhau thành một chỗ. "useReducer" có cơ chế hoạt động tương đồng như Redux
export default function UseReducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increase':
        return { ...state, age: state.age + 1 }
      case 'decrease':
        return { ...state, age: state.age - 1 }
      default:
        return { ...state }
    }
  }
  const [state, dispatch] = React.useReducer(reducer, { age: 0 })
  const increase = () => {
    dispatch({ type: 'increase' })
  }
  const decrease = () => {
    dispatch({ type: 'decrease' })
  }
  return (
    <div>
      <div>Count: {state.age}</div>
      <button onClick={increase}>Tăng</button>
      <button onClick={decrease}>Giảm</button>
    </div>
  )
}
