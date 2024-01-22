import { ClienteFactory } from "../interface/ClienteFactory";
import { Cliente } from "./Cliente";

class ClienteAdministradorFactory implements ClienteFactory {
  criarCliente(): Cliente {
    return new Cliente("Cliente Administrador", "12345", "F", 1);
  }
}
