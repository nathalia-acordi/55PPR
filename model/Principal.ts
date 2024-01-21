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

  public iniciarSistema(): void {
    Principal.getInstance()
  }

  public static getInstance(): Principal {
    if (!Principal.instance) {
      Principal.instance = new Principal();
    }
    return Principal.instance;
  }
}
