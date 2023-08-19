const Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
  console.log(1)
  await next();
  console.log(4)
})
app.use(async (ctx, next) => {
  console.log(2)
  next();
  console.log(5)
})
app.use(async (ctx, next) => {
  console.log(3)
  await next();
  console.log(6)
})

app.listen(3001, () => {
  console.log("服务启动成功...")
})