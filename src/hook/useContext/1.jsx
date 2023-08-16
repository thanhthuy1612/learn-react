import { number, string } from 'prop-types'
import User2 from './2'
import { createContext } from 'react'

export const UserContext = createContext({
  name: '1',
  age: 1,
  address: '1'
})
export default function User() {
  return (
    <UserContext.Provider
      value={{ name: string, age: number, address: string }}
    >
      <User2 />
    </UserContext.Provider>
  )
}
