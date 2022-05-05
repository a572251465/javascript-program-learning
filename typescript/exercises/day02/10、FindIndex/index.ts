// 找出E类型在元组类型T中的下标

type FindIndex<T, P> = any

type isAny<T> = 0 extends (1 & T) ? true : false

type F1 = (a: string, b: string) => void;
type F2 = (a: number, b: number) => void;
type F3 = (a: number, b: string) => void

type Fn = F1 & F2 & F3

let fn: Fn = (a, b) => {

}
fn(1, '1')

export default {}
