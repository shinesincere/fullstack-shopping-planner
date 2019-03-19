const express = require('express')
const router = express.Router()

const Item = require('../../models/Item')

router.post('/', (req, res) => { // http://localhost:4000/api/items
  new Item({name: req.body.name})
  .save()
  .then(i => res.json(i))
}) 

router.get('/', (req, res) => { // http://localhost:4000/api/items
  Item
  .find()
  .sort({date: -1})
  .then(i => res.json(i))
}) 

router.delete('/:id', (req, res) => { // http://localhost:4000/api/items/5c8d9f9a5e6eef1bd908708f
  Item
  .findById(req.params.id)
  .then(i => i.remove().then(() => res.json({success: true})))
  .catch(e => res.status(404).json({success: false}))
}) 

module.exports = router