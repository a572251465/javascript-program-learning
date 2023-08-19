class Person {}

type IClazz<T> = new () => T

const createInstance = <T>(clazz: IClazz<T>) => {
  return new clazz()
}
const res = createInstance(Person)

export default {}
