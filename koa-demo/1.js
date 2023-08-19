// ------------------- 定义
import  Koa from "koa"
import Router from "koa-router"
import bodyParser from "koa-bodyparser"

const app = new Koa()
app.use(Router())
app.use(bodyParser())


// ------------------- 使用
// 例如 Router

const Router = () => (ctx, next) => {
  // 手动执行next 方法才会执行下一步
  next();
}


// ------------------- 内部原理
const middlewares = []; // 所有的中间件
const ctx = {} // 表示koa上下文
const use = (index) => {
  const fn = middlewares[index];
  if (!fn) return;
  fn(ctx, () => use(index + 1));
}

// 第一次执行
use(0);