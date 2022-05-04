// your code here, don't use Pick<T,K> in your code.
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

export default {}
