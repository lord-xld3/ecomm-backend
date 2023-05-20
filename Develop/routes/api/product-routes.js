const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [
        { model: Category },
        { 
          model: Tag,
          through: ProductTag,
          as: 'tags'
        }
      ],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get by id
router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        { model: Category },
        { 
          model: Tag,
          through: ProductTag,
          as: 'tags'
        }
      ],
    });

    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);

    // If there are associated tags, create the product-tag associations
    if (req.body.tagIds && req.body.tagIds.length) {
      await product.addTags(req.body.tagIds);
      const productData = await Product.findByPk(product.id, {
        include: [
          { model: Category },
          { 
            model: Tag,
            through: ProductTag,
            as: 'tags'
          }
        ],
      });
      res.status(200).json(productData);
    } else {
      res.status(200).json(product);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    await product.update(req.body);

    // If there are associated tags, update the product-tag associations
    if (req.body.tagIds && req.body.tagIds.length) {
      await product.setTags(req.body.tagIds);
      const productData = await Product.findByPk(product.id, {
        include: [
          { model: Category },
          { 
            model: Tag,
            through: ProductTag,
            as: 'tags'
          }
        ],
      });
      res.status(200).json(productData);
    } else {
      res.status(200).json(product);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});


// delete one product by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
