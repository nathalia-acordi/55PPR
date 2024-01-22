import { Command } from "../interface/Command";
import { Livro } from "./Livro";
import { Principal } from "./Principal";

class CadastrarLivroCommand implements Command {
  private principal: Principal;
  private livro: Livro;

  constructor(principal: Principal, livro: Livro) {
    this.principal = principal;
    this.livro = livro;
  }

  execute(): void {
    this.principal.cadastrarLivro(this.livro);
  }

  undo(): void {
    this.principal.removerLivro(this.livro.titulo);
  }
}
