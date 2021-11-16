const express = require('express')
const router = express.Router()
const Form = require('../model/Model')

router.post('/', async (req, res) => {
  try {
    const { name, age, batch, fees } = req.body
    const user = new Form({
      name,
      age,
      batch,
      fees,
    })
    console.log(user)
    //     const savedUser = await user.save()
    //     res.json(savedUser)
  } catch (error) {
    //     console.error(error.message)
    //     res.status(500).send('Internal Server Error')
  }
})

router.get('/users', async (req, res) => {
  try {
    const users = await Form.find({ user: req.user.id })
    res.json(users)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Internal Server Error')
  }
})
