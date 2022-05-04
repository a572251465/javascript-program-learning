import CamelCase from '../10、CamelCase';

type Source = {
  'Handle-open': (flag: boolean) => true,
  'preview-Item': (data: {item: any, index: number}) => true,
  'close-item': (data: {item: any, index: number}) => true
}

type ComponentEmitsType<T> = {
  [P in keyof T as `on${P extends string ? CamelCase<P> : ''}`]?: T[P] extends ((...args: infer R) => any) ? (...args: R) => void : T[P]
}

type Result = ComponentEmitsType<Source>

export default {}
