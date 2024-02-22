const express = require("express");
const cookiePaser = require("cookie-parser");
const userRouter = require("./router/userRouter");
const jobRouter = require("./router/jobrouter");
const app = express();
app.use(cookiePaser());
app.use(express.json());

app.use("/user", userRouter);
app.use("/job", jobRouter);

app.listen(3000, () => {
  console.log("server listen 3000 port");
});
