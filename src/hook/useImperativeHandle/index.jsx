import React from 'react'

// dùng để đưa function từ component con ra component cha thông qua "ref". Từ đó component cha có thể thực thi được một function ở component con
const Input = React.forwardRef((props, ref) => {
  const [value, setValue] = React.useState('')
  const inputRef = React.useRef(null)
  const type = () => {
    let numberInput = 0
    const initalString = 'Thanh Thuy'
    inputRef.current?.focus()

    let interval = setInterval(() => {
      setValue(initalString.slice(0, numberInput))
      if (numberInput === initalString.length) return clearInterval(interval)
      numberInput++
    }, 100)
  }

  React.useImperativeHandle(ref, () => {
    return { type }
  })

  return <input type='text' value={value} placeholder='type something' />
})

export default function UseImperativeHandle() {
  const funcRef = React.useRef()
  const handleClick = () => {
    funcRef.current.type()
  }
  React.useDeferredValue(funcRef)
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <Input ref={funcRef} />
    </div>
  )
}
