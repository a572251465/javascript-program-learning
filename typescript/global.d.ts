declare interface Window {
  store: string
}

declare module 'jquery' {
  function $(): {
    css(keyName: string): string
    width(): number
  }

  export default $
}

declare function $(): {
  css(keyName: string): string
  width(): number
}

declare namespace $ {
  export namespace fn {
    function extend() {

    }
  }
}
