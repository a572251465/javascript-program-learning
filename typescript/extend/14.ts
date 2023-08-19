type IClazz<T> = () => T

const createInstance = <T>(clazz: IClazz<T>) => {
    return clazz;
}
const fn = (): number => {
  return 1
}
const res = createInstance(fn)

export default {}
