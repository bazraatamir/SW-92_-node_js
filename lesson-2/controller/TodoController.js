const Todo = require("../model/todoModel");

exports.getAllTodo = async (req, res) => {
  try {
    const data = await Todo.findAll();
    res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.AddTodo = async (req, res) => {
  try {
    const { Name } = req.body;
    const data = await Todo.create({ TodoName: Name });
    res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
