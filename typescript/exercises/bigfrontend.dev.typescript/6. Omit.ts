// your code here, please don't use Omit<T, K> in your code
type MyOmit<T, K> = Pick<T, Exclude<keyof T, K>>

export default {}
