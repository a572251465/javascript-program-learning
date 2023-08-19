export default {}

interface A {}
interface B {}

interface User<T extends A | B> {
  (params: T): void
}

export type CreateListFields = {
  register: User<A | B>
}

let test: User<A> = (params) => {}
let test1: User<B> = (params) => {}

const register: CreateListFields = {
  register: test
}