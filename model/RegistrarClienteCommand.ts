import { Command } from "../interface/Command";
import { Cliente } from "./Cliente";
import { Principal } from "./Principal";

class RegistrarClienteCommand implements Command {
  private principal: Principal;
  private cliente: Cliente;

  constructor(principal: Principal, cliente: Cliente) {
    this.principal = principal;
    this.cliente = cliente;
  }

  execute(): void {
    this.principal.registrarCliente(this.cliente);
  }

  undo(): void {
    this.principal.removerCliente(this.cliente.usuario);
  }
}
