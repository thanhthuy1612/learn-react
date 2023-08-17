import React from 'react'

function Title({ handleClick }) {
  console.log(1)
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}
export default React.memo(Title)
