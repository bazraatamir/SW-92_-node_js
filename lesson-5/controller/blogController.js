const Blog = require("../model/BlogModel");
const Category = require("../model/categoryMode");

exports.createBlog = async (req, res) => {
  const { title, content, categoryid } = req.body;
  //   console.log(typeof categoryid);
  try {
    const data = await Blog.create({
      Title: title,
      content,
      CategoryId: categoryid,
    });
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getAllBlog = async (req, res) => {
  try {
    const data = await Blog.findAll();
    console.log(data);
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getCategoryBolog = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const category = await Category.findByPk(id, { include: "blogs" });

    if (!category) {
      res.status(400).json({ message: "category oldsongui" });
    }
    const data = category.blogs;
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(400).json({ error });
  }
};
