const express = require('express');
const fs = require('fs');
const clientes = require("./clientes.json");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.json({titulo: "API ok!"});
});

app.get("/clientes", (req, res) => {
    return res.json(clientes);
});

app.post("/clientes", (req, res) => {
    const { nome, idade, email, senha } = req.body;
    fs.writeFileSync("clientes.json",  JSON.stringify(req.body))
    console.log(req.body);
    return res.json(clientes);
});


app.listen(8080, () =>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});