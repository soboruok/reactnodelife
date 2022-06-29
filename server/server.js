const express = require("express");
const dotenv = require("dotenv").config();
//errorHandler
const { errorHandler } = require("./middleware/errorMiddleware");

const port = process.env.PORT || 5000;

const app = express();

//Error handling
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/services", require("./routes/serviceRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
