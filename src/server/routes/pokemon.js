const router = require('express').Router()
const axios = require('axios') 

//this route would be avliable at /api/pokemon/ID
router.get('/pokemon/:id', (req, res, next) => {
  let id = req.params.id;

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