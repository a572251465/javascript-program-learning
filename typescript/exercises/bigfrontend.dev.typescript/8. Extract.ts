// your code here, please don't ues Extract<T, U> in your code
type MyExtract<T, U> = T extends U ? T : never

export default {}
