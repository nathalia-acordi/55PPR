import { ClienteFactory } from "../interface/ClienteFactory";
import { Cliente } from "./Cliente";

class GerenciadorCliente {
  private fabrica: ClienteFactory;

  constructor(fabrica: ClienteFactory) {
    this.fabrica = fabrica;
  }

  criarCliente(): Cliente {
    return this.fabrica.criarCliente();
  }
}
