// backend/routes/items.js
const router = require('express').Router();
let Item = require('../models/item.model');

// GET all items
router.route('/').get((req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST add a new item
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;

  const newItem = new Item({ name, description });

  newItem.save()
    .then(() => res.json('Item added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// GET item by ID
router.route('/:id').get((req, res) => {
  Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(400).json('Error: ' + err));
});

// PUT update item by ID
router.route('/update/:id').put((req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      item.name = req.body.name;
      item.description = req.body.description;

      item.save()
        .then(() => res.json('Item updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE item by ID
router.route('/:id').delete((req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.json('Item deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
