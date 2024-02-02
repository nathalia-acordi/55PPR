import { Cliente } from "./Cliente";
import { Livro } from "./Livro";

export class Principal {
  private static instance: Principal;
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

  public removerCliente(usuario: String): void {
    this.cliente = this.cliente.filter(cliente => cliente.usuario !== usuario);
  }

  public iniciarSistema(): void {
    Principal.getInstance()
  }

  private static getInstance(): Principal {
    if (!Principal.instance) {
      Principal.instance = new Principal();
    }
    return Principal.instance;
  }
}
