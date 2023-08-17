//useCallback
//Khi không muốn function được khởi tạo lại mỗi lần component re-render
import React, { useCallback } from 'react'
import Title from './Title'

export default function UseCallback() {
  const [count, setCount] = React.useState(0)
  const [count2, setCount2] = React.useState(0)

  const handleClick = useCallback(() => {
    setCount(count + 1)
  }, [count])
  const handleClick2 = () => {
    setCount2(count2 + 1)
  }
  return (
    <div>
      <Title handleClick={handleClick} />
      <button onClick={handleClick}>Click</button>
      <div>Count: {count}</div>
      <button onClick={handleClick2}>Click</button>
      <div>Count2: {count2}</div>
    </div>
  )
}
