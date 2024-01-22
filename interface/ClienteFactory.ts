import { Cliente } from "../model/Cliente";

export interface ClienteFactory {
  criarCliente(): Cliente;
}
