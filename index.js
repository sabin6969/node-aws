import express from "express";

const app = express();

app.get("/hello", (req, res) => {
    res.status(200).json({ sucess: true, message: "Hello World", });
})

app.get("/", (req, res) => {
    res.status(200).json({ sucess: true, message: "NRB MKC" });
})

app.listen(4000, () => {
    console.log("Server is up and running at port number 4000");
})