const arr = Object.freeze([1, 2, 3, []])
console.log(arr)

arr[3].push(1)
console.log(arr)
