import React from 'react'

export default function Text() {
  const textInput = React.useRef()
  const focusTextInput = () => textInput.current.focus()
  return (
    <div>
      <input type='text' ref={textInput} />
      <button onClick={focusTextInput}>Test</button>
    </div>
  )
}
