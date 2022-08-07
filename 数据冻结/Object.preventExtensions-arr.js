const arr = Object.preventExtensions([1, 2, 3, []])
console.log(arr)

arr.push(4)
console.log(arr)

arr[3].push(1)
console.log(arr)
