import express from "express";

import { test } from "src";

const app = express();

app.get("/", (req, res) => {
    res.status(200)
        .json({
            message: "Ok"
        });
});

const PORT = +process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
    test();
    console.log("Server started in: " + PORT);
});
