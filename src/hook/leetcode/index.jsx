import React from 'react'

export default function Test() {
  //   const containsDuplicate = function (nums) {
  //     let i = 0
  //     for (const element of nums) {
  //       console.log(nums.indexOf(element), i)
  //       if (nums.indexOf(element) < i) return true
  //       i++
  //     }
  //     return false
  //   }

  //   const merge = function (nums1, m, nums2, n) {
  //     nums1.length = m
  //     nums2.length = n
  //     nums1.push(...nums2)
  //     nums1.sort((a, b) => {
  //       if (a < b) {
  //         return -1
  //       }
  //     })
  //     console.log(nums1, 123)
  //   }

  //console.log(containsDuplicate([1, 2, 3, 4]))

  //   console.log(
  //     merge(
  //       [
  //         -10, -10, -9, -9, -9, -8, -8, -7, -7, -7, -6, -6, -6, -6, -6, -6, -6,
  //         -5, -5, -5, -4, -4, -4, -3, -3, -2, -2, -1, -1, 0, 1, 1, 1, 2, 2, 2, 3,
  //         3, 3, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0,
  //         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  //       ],
  //       55,
  //       [
  //         -10, -10, -9, -9, -9, -8, -8, -7, -7, -7, -6, -6, -6, -6, -6, -6, -6,
  //         -5, -5, -5, -4, -4, -4, -3, -3, -2, -2, -1, -1, 0, 1, 1, 1, 2, 2, 2, 3,
  //         3, 3, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0,
  //         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  //       ],
  //       99
  //     )
  //   )

  // const isPalindrome = (s) => {
  //   // let string1 = s
  //   //   .split(' ')
  //   //   .join('')
  //   //   .toLowerCase()
  //   //   .trim()
  //   //   .replace(/[^\w\s]/gi, '')
  //   //   .replace('_'|| " ", '')
  //   // let string2 = string1.split('').reverse().join('')
  //   // console.log(string1, string2)
  //   let newStr = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
  //   return newStr.split('').reverse().join('') === newStr
  // }
  // console.log(isPalindrome('ab_a'))

  // let nums = [0, 0, 5, 1, 1, 1, 2, 2, 3, 3, 4]
  // const removeDuplicates = function (nums) {
  //   let j = 0
  //   let length = nums.length
  //   for (let i = 0; i < length; i++) {
  //     console.log(nums, i, nums[i - j])
  //     if (nums.indexOf(nums[i - j]) < i - j) {
  //       nums.splice(i - j, 1)
  //       j++
  //     }
  //   }
  //   return nums.length
  // }

  // const removeDuplicates = function (nums) {
  //   let nums1 = Array.from(new Set(nums))
  //   nums.splice(0, nums.length)
  //   nums.push(...nums1)
  //   return nums.length
  // }

  // console.log(removeDuplicates(nums), nums)

  // const isAnagram = function (s, t) {
  //   console.log(
  //     s.replace(/[^\w]/g, '').toLowerCase().split('').sort().join(''),
  //     t.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
  //   )
  //   return (
  //     s.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('') ===
  //     t.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
  //   )
  // }

  // console.log(isAnagram('anagram', 'nagaram'))

  // const longestCommonPrefix = function (strs) {
  //   // if (strs.length < 2) return strs[0] || ''
  //   // let result = strs[0]
  //   // for (let i = 1; i < strs.length; i++) {
  //   //   if (strs[i].slice(0, result.length) !== result) {
  //   //     while (strs[i].indexOf(result) !== 0) {
  //   //       result = result.substring(0, result.length - 1)
  //   //       if (result === ' ') break
  //   //     }
  //   //   }
  //   // }
  //   // return result

  //   if (strs.length < 2) return strs[0] || ''
  //   let result = strs[0]
  //   return result.slice(
  //     0,
  //     strs.reduce((_a, b) => {
  //       if (b.slice(0, result.length) !== result) {
  //         while (b.indexOf(result) !== 0) {
  //           result = result.substring(0, result.length - 1)
  //           if (result === ' ') return 0
  //         }
  //       }
  //       return result.length
  //     }, result.length)
  //   )
  // }
  // console.log(longestCommonPrefix(['flower', 'flow', 'flight']))

  // const myPow = function (x, n) {
  //   if (x === 0) return 0
  //   if (n === 0) return 1
  //   if (n === 1) return x
  //   if (n < 0) return 1 / myPow(x, -n)
  //   let result = myPow(x, Math.floor(n / 2))
  //   return n % 2 === 1 ? result * result * x : result * result
  // }

  // console.log(myPow(2, 3))
  // const twoSum = function (nums, target) {
  //   // for (let i = 0; i < nums.length - 1; i++) {
  //   //   for (let j = i + 1; j < nums.length; j++) {
  //   //     if (nums[i] + nums[j] === target) return [i, j]
  //   //   }
  //   // }

  //   for (let i = 0; i < nums.length; i++) {
  //     if (
  //       nums.indexOf(target - nums[i]) !== -1 &&
  //       nums.indexOf(target - nums[i]) !== i
  //     ) {
  //       return [i, nums.indexOf(target - nums[i])]
  //     }
  //   }
  // }

  // console.log(twoSum([3, 2, 4], 6))

  // const groupAnagrams = function (strs) {
  //   // let result = {}
  //   // strs.reduce((_a, b) => {
  //   //   let s = b.split('').sort().join('')
  //   //   if (!result[s]) result[s] = []
  //   //   result[s].push(b)
  //   // }, strs.length)
  //   // return Object.values(result)

  //   let result = {}
  //   for (let b of strs) {
  //     let s = b.split('').sort().join('')
  //     if (!result[s]) result[s] = []
  //     result[s].push(b)
  //   }
  //   return Object.values(result)

  //   // return Object.values(
  //   //   strs.reduce((a, b) => {
  //   //     if (a === strs.length) {
  //   //       a = {}
  //   //     }
  //   //     let s = b.split('').sort().join('')
  //   //     if (!a[s]) a[s] = []
  //   //     a[s].push(b)
  //   //     console.log(a)
  //   //     return a
  //   //   }, strs.length)
  //   // )
  // }

  // console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))

  // var isSubsequence = function (s, t) {
  //   if (s === '') return true
  //   return (
  //     t.split('').reduce((a, b) => {
  //       if (a === t.length) {
  //         a = s.split('')
  //       }
  //       console.log(a, a, b)
  //       if (a[0] === b) {
  //         a.splice(0, 1)
  //       }
  //       return a
  //     }, t.length).length === 0
  //   )

  //   // if (s === '') return true
  //   // let c = s.split('')
  //   // for (let b of t.split('')) {
  //   //   if (c[0] === b) {
  //   //     c.splice(0, 1)
  //   //     if (c.length === 0) {
  //   //       return true
  //   //     }
  //   //   }
  //   // }
  //   // return false
  // }

  // console.log(isSubsequence('b', 'abc'))

  // var isValid = function (s) {
  //   if (s.length % 2 !== 0) return false
  //   console.log(s.length)
  // }
  // console.log(isValid('()'))

  // const topKFrequent = function (nums, k) {
  //   let array = Object.entries(
  //     nums.reduce((a, b) => {
  //       if (!a[b]) {
  //         a[b] = 0
  //       }
  //       a[b]++
  //       return a
  //     }, {})
  //   )
  //   array.sort((a, b) => {
  //     if (a[1] > b[1]) {
  //       return -1
  //     }
  //   })
  //   console.log(array)
  //   return array.slice(0, k).reduce((a, b) => {
  //     a.push(parseInt(b[0]))
  //     return a
  //   }, [])
  // }
  // console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))

  const productExceptSelf = function (nums) {
    let array = nums.filter((item) => item !== 0)
    if (nums.length - array.length > 1) {
      return nums.reduce((a, _b) => {
        a.push(0)
        return a
      }, [])
    }
    let number = array.reduce((a, b) => {
      return a * b
    }, 1)
    return nums.reduce((a, b) => {
      a.push(nums.length === array.length ? number / b : b === 0 ? number : 0)
      return a
    }, [])
  }
  console.log(productExceptSelf([-1, 1, 0, -3, 3]))
  return <div></div>
}
