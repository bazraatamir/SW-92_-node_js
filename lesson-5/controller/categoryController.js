const Category = require("../model/categoryMode");

exports.createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const data = await Category.create({ name: name });
    res.status(200).json({ data });
  } catch (error) {
    res.status(200).json({ error });
  }
};

exports.getAllCategory = async (req, res) => {
  try {
    const data = await Category.findAll();
    res.status(200).json({ data });
  } catch (error) {
    res.status(200).json({ error });
  }
};
