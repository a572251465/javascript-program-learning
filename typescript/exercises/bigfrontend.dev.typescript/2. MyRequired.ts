
type MyRequired<T> = {
  [P in keyof T]-?: T[P]
}
// your code here, please don't use Required<T> in your code
