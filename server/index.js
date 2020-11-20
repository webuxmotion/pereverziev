const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const port = parseInt(process.env.PORT, 10) || 1991
const app = next({ dev })
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})


