import React from 'react'

export default function Test() {
  const find = (number) => (func) => {
    const result = []
    for (let i = 0; i < number; i++) {
      if (func(i)) {
        result.push(i)
      }
    }
    return result
  }
  console.log(find(10)((number) => number % 2 === 0))
  return <div></div>
}
