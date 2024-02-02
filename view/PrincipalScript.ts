import { Cliente } from "../model/Cliente";
import { Principal } from "../model/Principal";

window.onload = function () {
  const clienteForm = document.getElementById("clienteForm") as HTMLFormElement;
  clienteForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = (document.getElementById("usuario") as HTMLInputElement).value;
    const senha = (document.getElementById("senha") as HTMLInputElement).value;
    const sexo = (document.getElementById("sexo") as HTMLSelectElement).value;

    const user = {usuario, senha, sexo};

    alert("Cliente registrado" + user);
  });
};
