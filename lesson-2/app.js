const express = require("express");
const TodoRouter = require("./router/TodoRouter");
const app = express();

app.use(express.json());

app.use("/todo", TodoRouter);

app.listen(3000, () => {
  console.log("server listen 3000 port");
});
