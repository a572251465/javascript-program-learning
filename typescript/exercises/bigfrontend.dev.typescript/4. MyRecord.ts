//please don't use Record<K, V> in your code
type MyRecord<K extends keyof any, V> = {
  [P in K]: V
}

export default {}
