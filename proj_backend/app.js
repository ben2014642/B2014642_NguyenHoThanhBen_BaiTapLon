
const express = require("express");
const cors = require("cors");
const app = express();

const booksRouter = require("./app/routes/book.route");
const borrowRouter = require("./app/routes/borrow.route");
const authRouter = require("./app/routes/auth.route");
const publisherRouter = require("./app/routes/publisher.route");
const ApiError = require("./app/api-error");

app.use(cors());
app.use(express.json());

app.use("/api/books", booksRouter);
app.use("/api/borrow", borrowRouter);
app.use("/api/auth", authRouter);
app.use("/api/publishers", publisherRouter);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });

});

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {

    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});


module.exports = app;