// function test<T>(a: T, b: T) {}

// test(1, '1')
// test('2', 2)
// test(3, 3)

function add(a: number, b: number): number
function add(a: string, b: string): number
function add(a: any, b: any): any {
  if (typeof a === 'number') {
    return a + b
  }
  return a - b
}

export default {}
