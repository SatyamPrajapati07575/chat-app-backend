const express = require("express");
const app = express();
const responseFormatter = require("./utils/response");
const userRoutes = require("./modules/user/user.routes");

app.use(express.json());
app.use(responseFormatter);

app.use("/api/users", userRoutes);

// 404 & Error
app.use((req, res) => res.fail("Route not found", 404));
app.use((err, req, res, next) => res.fail(err.message || "Server error", 500));

module.exports = app;
