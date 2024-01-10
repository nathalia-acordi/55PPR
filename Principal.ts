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

  public administrarLivros(livro: Livro): void {
    this.biblioteca.push(livro);
  }

  public iniciarSistema(): void {
    // Implementação do início do sistema
  }
}
