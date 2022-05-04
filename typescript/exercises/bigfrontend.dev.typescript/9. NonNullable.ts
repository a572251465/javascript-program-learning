type MyNonNullable<T> = T extends null | undefined ? never : T
// your code here, don't use NonNullable<T> in your code

export default {}
