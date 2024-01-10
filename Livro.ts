class Livro {
  private titulo: string;
  private autor: string;
  private isbn: string;
  private estado: string;

  constructor(titulo: string, autor: string, isbn: string, estado: string) {
    this.titulo = titulo;
    this.autor = autor;
    this.isbn = isbn;
    this.estado = estado;
  }

  public emprestar(): void {
    // Implementação do empréstimo de livro
  }

  public devolver(): void {
    // Implementação do retorno de livro
  }

  public atualizarDetalhes(): void {
    // Implementação da atualização dos detalhes do livro
  }
}
