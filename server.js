const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors')
const Form = require('./model/Model')
require('dotenv').config({ path: './config.env' })

connectToMongo()
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

app.post('/', async (req, res) => {
  try {
    const { name, age, batch, fees } = req.body
    const user = await Form.create({
      name,
      age,
      batch,
      fees,
    })
    return user
  } catch (error) {
    console.error(error.message)
    // res.status(500).send('Internal Server Error')
  }
})

app.listen(port, () => {
  console.log(`Server is up and running on ${port}`)
})
