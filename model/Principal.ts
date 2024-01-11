import { Cliente } from "./Cliente";
import { Livro } from "./Livro";

class Principal {
  private biblioteca: Array<Livro>;
  private cliente: Array<Cliente>;

  constructor() {
    this.biblioteca = [];
    this.cliente = [];
  }

  public registrarCliente(cliente: Cliente): void {
    this.cliente.push(cliente);
  }

  public cadastrarLivro(livro: Livro): void {
    this.biblioteca.push(livro);
  }

  public removerLivro(titulo: string): void {
    this.biblioteca = this.biblioteca.filter(livro => livro.titulo !== titulo);
  }

  public iniciarSistema(): void {
    // Implementação do início do sistema
  }
}
