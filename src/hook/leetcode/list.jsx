export default function List() {
  const twoSum = function (numbers, target) {
    for (let i = 0; i < numbers.length - 1; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
          return [i + 1, j + 1]
        }
      }
    }
  }
  console.log(twoSum([0, 0, 3, 4], 0))
  return <div></div>
}
