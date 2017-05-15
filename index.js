var iterativeLog = function(array) {
  array.forEach(index => console.log(`${index - 1}: ${array[index - 1]}`))
}

function iterate(callback) {
  ary = [1,2,3,4]

  ary.forEach(callback)

  return ary
}

function doToArray(ary, callback) {
  ary.forEach(callback)
}
