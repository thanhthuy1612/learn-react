import { useContext } from 'react'
import User3 from './3'
import { UserContext } from './1'

export default function User2() {
  const { address } = useContext(UserContext)
  return (
    <>
      <div>{address}</div>
      <User3 />
    </>
  )
}
