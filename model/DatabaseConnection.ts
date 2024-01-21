import { Cliente } from "./Cliente";
import { Livro } from "./Livro";

class DatabaseConnection {
  private static instance: DatabaseConnection;
  private clientes: Cliente[];
  private livros: Livro[];
  private emprestimos: Emprestimo[];

  constructor() {
    this.clientes = [];
    this.livros = [];
    this.emprestimos = [];
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  adicionarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  removerCliente(cliente: Cliente): void {
    const index = this.clientes.indexOf(cliente);
    if (index > -1) {
      this.clientes.splice(index, 1);
    }
  }

  editarCliente(clienteAtualizado: Cliente): void {
    const index = this.clientes.indexOf(clienteAtualizado);
    if (index > -1) {
      this.clientes[index] = clienteAtualizado;
    }
  }
}
