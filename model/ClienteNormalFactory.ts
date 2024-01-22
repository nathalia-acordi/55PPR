import { ClienteFactory } from "../interface/ClienteFactory";
import { Cliente } from "./Cliente";

class ClienteNormalFactory implements ClienteFactory {
  criarCliente(): Cliente {
    return new Cliente("Cliente Normal", "12345", "M", 1);
  }
}
