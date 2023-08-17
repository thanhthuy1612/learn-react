import React from 'react'

//useId: tạo ra một unique Id
//công dụng: tạo ra 1 id duy nhất thích hợp cho label htmlFor và input
//có thể đồng bộ ở server và client
export default function UseId() {
  const id = React.useId()
  return (
    <div>
      <label htmlFor={id}>Test</label>
      <input id={id} type='text' onChange={() => {}} />
    </div>
  )
}
