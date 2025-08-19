import { app } from '../src/app'

app.listen({
  host: '0.0.0.0',
  port: 3333,
}).then((port) => {
  console.log(`🚀 HTTP Server Running on port ${port}`)
})