const Koa = require("koa");
const app = new Koa();

app.use( (ctx) => {
  ctx.body = "hello wold"
});

app.listen(3001, () => {
  console.log("服务启动成功")
})