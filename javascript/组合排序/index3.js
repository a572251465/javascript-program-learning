const arr = [19, 11, 2, 45, 32, 11, 67, 76, 18]

for (let i = 0; i < arr.length; i += 1) {
  for (let j = 0; j < arr.length - 1 - i; j += 1) {
    if (arr[j] > arr[j + 1]) {
      const temp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = temp
    }
  }
  console.log(arr)
}

console.log(arr)
