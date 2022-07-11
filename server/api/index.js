const router = require('express').Router()
const fetch = require('node-fetch')
module.exports = router

router.use('/users', require('./users'))
router.use('/challenges', require('./challenges'))

router.put('/eval', async (req, res) => {
  try {
    const {userInputStr, challengeId} = req.body
    const resp = await fetch(process.env.DOCKER_URL, {
      method: 'put',
      body: JSON.stringify({userInputStr, challengeId})
    })

    const data = await resp.json()
    res.send(data)
  } catch (error) {
    throw error
  }
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
