const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// Get all categories and their associated products
router.get("/", async (req, res) => {
  try {
    // Find all categories, including their associated products
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categories);
  } catch (err) {
    // Handle errors by sending a 500 status with a custom message
    res.status(500).json({ message: "Category not found!" });
  }
});

// Get one category by its `id` value
router.get("/:id", async (req, res) => {
  try {
    // Find the category with the matching ID, including its associated products
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    // If the category is not found, send a 404 status with a custom message
    !category
      ? res.status(404).json({ message: "No category found with this id!" })
      : res.status(200).json(category);
  } catch (err) {
    // Handle errors by sending a 500 status with a custom message
    res.status(500).json({ message: "category not found!", error: err });
  }
});

// create a new category
router.post("/", async (req, res) => {
  try {
    // Create a new category using the data in the request body
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    // Handle errors by sending a 400 status with a custom message
    res.status(400).json({ message: "Category creation failed", error: err });
  }
});

// update a category by its `id` value
router.put("/:id", async (req, res) => {
  try {
    // Update the category with the matching ID using the data in the request body
    const updatedCategory = await Category.update(req.body, {
      where: { id: req.params.id },
    });

    // If the category is not found, send a 404 status with a custom message
    // Otherwise, return the updated Category data
    !updatedCategory
      ? res.status(404).json({ message: "id not found" })
      : res.status(200).json(updatedCategory);
  } catch (err) {
    // Handle errors by sending a 500 status with a custom message
    res.status(500).json({ message: "Category update failed", error: err });
  }
});

// delete a category by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    // Delete the category with the matching ID
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id },
    });

    // If the category is not found, send a 404 status with a custom message
    // Otherwise, return the deleted data
    !deletedCategory
      ? res.status(404).json({ message: "id not found" })
      : res.status(200).json(deletedCategory);
  } catch (err) {
    // If there is an error, send a 500 status with the error
    res.status(500).json(err);
  }
});

// Export the router
module.exports = router;
