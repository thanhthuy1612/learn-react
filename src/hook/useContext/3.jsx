import { useContext } from 'react'
import { UserContext } from './1'

export default function User3() {
  const { name, age } = useContext(UserContext)
  return (
    <>
      <div>
        {name} {age}
      </div>
    </>
  )
}
