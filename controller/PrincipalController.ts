import express from "express";
import path from "path";
import { Principal } from "../model/Principal";
import { Cliente } from "../model/Cliente";
import { Livro } from "../model/Livro";

const app = express();
const principal = new Principal();

app.use(express.json());

// Configuração do motor de visualização
app.set("view engine", "pug");
app.set("views", path.join("PrincipalView", "./views"));

// Endpoint para registrar um novo cliente
app.post("/cliente", (req, res) => {
  const cliente = req.body;
  principal.registrarCliente(
    new Cliente(cliente.usuario, cliente.senha, cliente.sexo)
  );
  res.status(201).send("Cliente registrado");
});

// Endpoint para cadastrar um novo livro
app.post("/livro", (req, res) => {
  const livro = req.body;
  principal.cadastrarLivro(
    new Livro(livro.titulo, livro.autor, livro.isbn, livro.estado)
  );
  res.status(201).send("Livro cadastrado");
});

// Endpoint para remover um livro
app.delete("/livro/:titulo", (req, res) => {
  const titulo = req.params.titulo;
  principal.removerLivro(titulo);
  res.status(200).send("Livro removido");
});

app.get("/", (req, res) => {
  res.render("PrincipalView", {
    title: "Bem-vindo à Biblioteca",
    message: "Esta é a página inicial",
  });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
