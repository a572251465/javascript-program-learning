function test(a: string, b: string): string {
  return a + b
}

const test1: (a: string, b: string) => string = (a: string, b: string) => a + b

function test2(a: string, ...args: string[]) {}

function test3(a: string, b?: string) {}

function sum(a: string, b: string): string
function sum(a: number, b: number): number
function sum(a: string | number, b: string | number): string | number {
  if (typeof a === 'string') {
    return a + b
  } else {
    return a + Number(b)
  }
}

sum(1, 1)
export {}
