import { createContext, useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import User2 from './2'
import connect from '../higherOrderComponent'

export const UserContext = createContext(null)
function User() {
  const [count, setCount] = useState(1)
  const [flag, setFlag] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      flushSync(() => {
        setCount(count + 1)
      })
      flushSync(() => {
        setFlag(!flag)
      })
    }, 1000)
  }, [flag, count])
  return (
    <UserContext.Provider value={{ name: '1', age: 0, address: '1' }}>
      <User2 />
    </UserContext.Provider>
  )
}
export default connect(User)
