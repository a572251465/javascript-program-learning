const forEach = (
  arr: number[],
  callback: (item: number, index: number, argsArr: number[]) => void
) => {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    callback(item, i, arr)
  }
}

forEach([1, 2], function (item: number) {
  console.log(item)
})

export default {}
