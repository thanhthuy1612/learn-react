import React from 'react'

//Tham chiếu ref sẽ không thay đổi mỗi khi re-render(không như biến thông thường, bị reset mỗi khi render)
//Thay đổi nó sẽ không làm re-render(không như state-làm re-render)
//Thông tin được bao gói bên trong component(không như biến bên ngoài, bị chia sẻ nhiều chỗ khác dùng được)
function WatchTimmer() {
  const [seconds, setSeconds] = React.useState(0)
  const intervalRef = React.useRef(null)
  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((pre) => pre + 1)
      console.log(intervalRef)
      console.log(1)
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
      console.log('close')
    }
  }, [])
  return <div>Watch: {seconds}</div>
}
export default function Watch() {
  const [isClear, setIsClear] = React.useState(false)
  return (
    <>
      <button onClick={() => setIsClear(!isClear)}>Click</button>
      {!isClear && <WatchTimmer />}
    </>
  )
}
