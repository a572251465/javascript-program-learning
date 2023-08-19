type ICallback<T> = (item: T, index: number) => void
type ICallback1 = <T>(item: T, index: number) => void

type IForEach = <T>(arr: T[], callback: ICallback<T>) => void

const forEach: IForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i)
  }
}
forEach([1, 2, 3], function (item, index) {
  console.log(item, index)
})

export default {}
