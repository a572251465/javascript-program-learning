// your code here, don't use Exclude<T, E> directly in your code
type MyExclude<T, E> = T extends E ? never : T

export default {}
