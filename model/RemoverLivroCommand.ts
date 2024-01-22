import { Command } from "../interface/Command";
import { Livro } from "./Livro";
import { Principal } from "./Principal";

class RemoverLivroCommand implements Command {
  private principal: Principal;
  private titulo: string;

  constructor(principal: Principal, titulo: string) {
    this.principal = principal;
    this.titulo = titulo;
  }

  execute(): void {
    this.principal.removerLivro(this.titulo);
  }

  undo(): void {
    this.principal.cadastrarLivro(
      new Livro(this.titulo, "Teste", "Teste", "Teste")
    );
  }
}
