const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/blog', (req, res) => {
    res.sendfile(__dirname + '/views/blog-directory.html')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})