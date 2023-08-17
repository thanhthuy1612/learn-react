//React.memo là một HOC, vậy nên chỉ cần bao bọc component là được
//Chúng ta dùng React.memo khi không muốn component bị re-render mỗi khi component cho re-render
//Các tác nhân làm component re-render: cập nhật state, cập nhật prop, component cha re-render
//React.memo chỉ tác dộng đến prop, không ảnh hưởng đến state
//Cơ chế memo là cơ chế dùng bộ nhớ (RAM) để lưu trữ, vì thế khi dùng những thứ liên quan đến memo nghĩa là chúng ta đang đánh đổi giữa tốn nhiều bộ nhớ để tăng tốc performance
import React, { useMemo } from 'react'
import Title from './Title'

export default function UseMemo() {
  const [count, setCount] = React.useState(0)
  const [count2, setCount2] = React.useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }
  const handleClick2 = () => {
    setCount2(count2 + 1)
  }
  const memoCount = useMemo(() => {
    return count
  }, [count])
  return (
    <div>
      <Title count={memoCount} />
      <button onClick={handleClick}>Click</button>
      <div>Count: {count}</div>
      <button onClick={handleClick2}>Click</button>
      <div>Count2: {count2}</div>
    </div>
  )
}
