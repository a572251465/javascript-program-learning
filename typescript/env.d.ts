declare interface IPerson {
  name: string
  age: number
}

interface IJquery {
  (el: string): this
  width(): this
  height(): this
  ajax(url: string, params: Record<string, unknown>): void
}

declare const $: IJquery
//
// declare module 'mitt' {
//   type IListener = (e: Event, ...args: string[]) => void
//   const on: (name: string, fn: IListener) => void
//   const off: (name: string, fn: IListener) => void
//   export { on, off }
//   export type { IListener }
// }

declare module '*.png' {
  const str: string
  export default str
}

export = mitt
declare namespace mitt {}

// namespace mitt {
//   type IListener = (e: Event, ...args: string[]) => void
//   const on: (name: string, fn: IListener) => void
//   const off: (name: string, fn: IListener) => void
// }
//
// export = mitt

declare global {
  interface Window {
    chedd(): void
  }
}
