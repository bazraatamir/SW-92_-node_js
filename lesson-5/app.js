const express = require("express");
const blogRouter = require("./router/blogRouter");
const categoryRouter = require("./router/categoryRouter");
const app = express();
app.use(express.json());
app.use("/category", categoryRouter);
app.use("/blog", blogRouter);
app.listen(3000, () => {
  console.log("server listen 300 port");
});
