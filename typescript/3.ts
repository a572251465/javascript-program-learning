// const person: IPerson = {
//   name: '',
//   age: 10
// }
//
// $('#app').width().height()
// $.ajax('login', { method: 'get' })

import _, { on, off } from 'mitt'
import type { IListener } from 'mitt'

const callback: IListener = () => {}

_.on('data', callback)
_.off('data', callback)

_.x()

type a = Omit<any, any>
// import url from "1.png";

type Extract<T, U> = T & {} extends [U] ? T : never

interface Person {
  name: string
  age: number
}
type c = keyof Person
type b = Extract<'1' | '2', '1'>

// []

// ISelectType<[number | string], [umber]>

export default {}
