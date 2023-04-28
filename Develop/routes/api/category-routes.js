const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      // setup the findAll sequelize method.

      include: [{ model: Product }],  
    });
    // include the Product model    
    res.status(200).json(categoryData);
    // return the data as JSON
  } catch (err) {
    res.status(500).json(err);
  }
  // find all categories
  // be sure to include its associated Products
});
// This GET route retrieves a category by its ID, including all associated products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {

      include: [{ model: Product }],
    });
    // If no category data was found for the given ID, return a 404 response with an error message
    if (!categoryData) {

      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    // If category data was found, return a 200 response with the category data and its associated products
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});
// The POST router is set sup to be able to create an anew Category.
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new category
});
// The PUT router is set up to be able to update an existing category.
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
       where: {
        id: req.params.id,
       },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500);
  }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({

      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  } 
});

module.exports = router;
