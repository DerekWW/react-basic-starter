const router = require('express').Router()
const axios = require('axios')

router.get('/:id', (req, res, next) => {
  let id = req.params.id;

  console.log('here')

  axios
    .get(`http://pokeapi.co/api/v2/pokemon/${id}`)
    .then((r) => {  
      res.send(r.data)
    })
    .catch((err) => {
      next(err.response.data)
    })

})

module.exports = router;