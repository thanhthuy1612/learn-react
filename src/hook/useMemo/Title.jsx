import React from 'react'

function Title(props) {
  const [count1, setCount] = React.useState(0)
  console.log(1)
  const handleClick = () => {
    setCount(count1 + 1)
  }
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <div>Count chidren: {count1}</div>
      <div>Count chidren: {props.count}</div>
    </div>
  )
}
export default React.memo(Title)
