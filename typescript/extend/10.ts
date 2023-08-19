class Person {}

interface IClazz<T> {
  new (): T
}

const createInstance = <T>(clazz: IClazz<T>) => {
  return new clazz()
}
const instance = createInstance(Person)
console.log(instance)

type ICallback<T> = (item: T, index: number) => void
const forEach = <T>(arr: T[], callback: ICallback<T>) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i)
  }
}

forEach([1, 2, 3], function (item, index) {
  console.log(item, index)
})

type ISwap = <T, U>(tuple: [T, U]) => [U, T]
const swap: ISwap = (tuple) => {
  return [tuple[1], tuple[0]]
}

const res = swap(['name', 1])
