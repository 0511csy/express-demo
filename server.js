const express = require('express')
const app = express()
const port = 9999
const path = require('path')

app.get('/', (req, res) => { 
  let p = path.join(__dirname,'./index.html')
  res.sendFile(p)
} )

app.get('/cc', (req, res) => res.send('hi'))
app.use('/public', express.static(path.join(__dirname, 'public')))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

