const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// Get all tags
router.get("/", async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      //include its associated Product data
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    // Handle errors by sending a 500 status with a custom message
    res.status(500).json({ message: "Tags not found!" });
  }
});

// Get a tag by a single tag by its `id`
router.get("/:id", async (req, res) => {
  try {
    // Find the tagData with the matching ID, including its associated products
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    // If the TagData is not found, send a 404 status with a custom message
    !tagData
      ? res.status(404).json({ message: "No tag found with this id!" })
      : res.status(200).json(tagData);
  } catch (err) {
    // Handle errors by sending a 500 status with a custom message
    res.status(500).json({ message: "Tag not found!" });
  }
});

// create a new tag
router.post("/", async (req, res) => {
  try {
    // Create a new tag using the data in the request body
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    // Handle errors by sending a 400 status with a custom message
    res.status(400).json({ message: "Tag creation failed!" });
  }
});

// update a tag's name by its `id` value
router.put("/:id", async (req, res) => {
  try {
    // Update the tag with the matching ID using the data in the request body
    const updatedTagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // If the TagData is not found, send a 404 status with a custom message
    // Otherwise, return the updated TagData data
    !updatedTagData
      ? res.status(404).json({ message: "No tag found with this id!" })
      : res.status(200).json(updatedTagData);
  } catch (err) {
    // Handle errors by sending a 500 status with a custom message
    res.status(500).json({ message: "update failed", error: err });
  }
});

// delete on tag by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    // Delete the tagData with the matching ID
    const deletedTagData = await Tag.destroy({ where: { id: req.params.id } });
    // If the tagData is not found, send a 404 status with a custom message
    // Otherwise, return the deleted tagData
    !deletedTagData
      ? res.status(404).json({ message: "No tag found with this id!" })
      : res.status(200).json(deletedTagData);
  } catch (err) {
    res.status(500).json({ message: "Tag deletion failed" });
  }
});

// Export the router
module.exports = router;
