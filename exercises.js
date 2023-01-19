// Question 1
const isRealPalindrome = (string) => {
  const ignore = {
    ",": true,
    "'": true,
    " ": true
  }
  string = string.toLowerCase()
  let cleanString = ''
  let reverseCleanString = ''
  for (let i = 0; i < string.length; i++) {
    if (!(string[i] in ignore)) {
      cleanString += string[i]
    }
  }
  if (cleanString === cleanString.split('').reverse().join('')) {
    return true
  } else {
    return false
  }
};

// Question 2
const runningTotal = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    array[i + 1] += array[i]
  }
  return array
};

// Question 3
const swap = (string) => {
  string = string.split(' ')
  for (let i = 0; i < string.length; i++) {
    if (string[i].length === 1) {
      continue
    }
    let save = string[i]
    let sLetter = save[save.length - 1]
    string[i] = string[i].split('')
    string[i][string[i].length - 1] = string[i][0]
    string[i][0] = sLetter
    string[i] = string[i].join('')
  }
  return string.join(' ')
};

// Question 4
const wordSizes = (string) => {
  let obj = {}
  if (string.length === 0) {
    return obj
  }
  string = string.split(' ')
  for (let i = 0; i < string.length; i++) {
    if (obj[string[i].length]) {
      obj[string[i].length]++
    } else {
      obj[string[i].length] = 1
    }
  }
  return obj
};

// Question 5
const union = (matrix1, matrix2) => {
  const obj = {}
  const solution = []
  for (let i = 0; i < matrix1.length; i++) {
    if (!obj[matrix1[i]]) {
      obj[matrix1[i]] = true
      solution.push(matrix1[i])
    }
  }
  for (let i = 0; i < matrix2.length; i++) {
    if (!obj[matrix2[i]]) {
      obj[matrix2[i]] = true
      solution.push(matrix2[i])
    }
  }
  console.log(solution)
  return solution
};

// Question 6
const firstRecurring = (string) => {
  const obj = {}
  for (let i = 0; i < string.length; i++) {
    if (!obj[string[i]]) {
      obj[string[i]] = true
    } else {
      return string[i]
    }
  }
  return ""
};

// Question 7
const showMultiplicativeAverage = (array) => {
  let result = array[0]
  for (let i = 1; i < array.length; i++) {
    result *= array[i]
  }
  result = result / array.length
  return result.toFixed(3)
};

// Quetsion 8
const multiplyList = (array1, array2) => {
  const newArray = []
  for (let i = 0; i < array1.length; i++){
    newArray.push(array1[i] * array2[i])
  }
  return newArray
};

// Question 9
const sequence = (integer) => {
  const array = []
  for (let i = 1; i <= integer; i++){
    array.push(i)
  }
  return array
};

// The below code connects this JS file to our test file
module.exports = {
  isRealPalindrome,
  runningTotal,
  swap,
  wordSizes,
  union,
  firstRecurring,
  showMultiplicativeAverage,
  multiplyList,
  sequence,
};
