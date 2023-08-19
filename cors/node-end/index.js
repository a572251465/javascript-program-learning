const Koa = require('koa')
const KoaRouter = require('@koa/router')
const BodyParser = require('koa-bodyparser')

const app = new Koa()
const router = new KoaRouter()

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:9000')
  ctx.set('Access-Control-Allow-Credentials', 'true')
  next()
})

router.get('/userInfo', (ctx) => {
  // 给页面中传递cookie
  ctx.cookies.set('name', 'tom')

  ctx.body = {
    name: 'tom',
    age: 20
  }
})

router.get('/jsonp', (ctx) => {
  const callback = ctx.query.callback
  const data = {
    name: 'tom',
    age: 20
  }
  ctx.body = `${callback}(${JSON.stringify(data)})`
})

app.use(router.routes())
app.use(BodyParser())

app.listen(3001, () => {
  console.log('server is running at http://localhost:3001')
})
