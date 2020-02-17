// express code here
// endpoints at /api/web
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

var port = 80
if (process.env.PORT !== null)
    var port = process.env.PORT
app.listen(port, () => console.log(`Webservice listening on port ${port}!`))