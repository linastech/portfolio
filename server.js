const express       = require('express')
const next          = require('next')
const compression   = require('compression')
const bodyParser    = require('body-parser')
const Emailjs       = require('emailjs')

const dev = process.env.NODE_ENV !== 'production'
const port = dev ? 3001 : 3000;
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
  const server = express()

  if (dev === false)
    server.use(compression())

  server.use(bodyParser.json())

  server.post("/_api/contact", (req, res) => {
    res.setHeader('Content-Type', 'application/json')
      Emailjs.server.connect({
        user: 'linas.rakauskas.uk@gmail.com',
        password: 'Sazubshad6451',
        host: 'smtp.gmail.com',
        ssl: true,
        timeout: 10000
      })
      .send(
        {
          from:  		"linas.rakauskas.uk@gmail.com", 
          to:    		"linas.rakauskas.uk@gmail.com",
          subject:	"Contacted by "+req.body.name,
          text:		
          "Contacted by: "+req.body.name+"\n\
          Email:	"+req.body.email+"\n\
          Message: \n"+
          req.body.message
      }, 
        (err) => {
          if(err)
            console.log(err)

          res.end(JSON.stringify({error: false}))
        }
      )

    res.end(JSON.stringify({error: false}))
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
      console.log(`> Server is running on port ${port}`)
    })
  })
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})