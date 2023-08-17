import React from 'react'

//useLayoutEffect chạy trước useEffect
//hơn: chạy callback useLayoutEffect trc khi component layer
export default function Layout() {
  const [count, setCount] = React.useState(0)
  const handleClick = () => {
    setCount((pre) => pre + 1)
  }
  React.useLayoutEffect(() => {
    if (count === 4) {
      setCount(0)
    }
  }, [count])
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}
