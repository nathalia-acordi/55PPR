import { Observer } from "../interface/Observer";
import { Livro } from "./Livro";

class LogObserver implements Observer {
  private logsEmprestimos: string[];


  update(livro: Livro): void {
    let msg = `O livro ${livro.titulo} foi emprestado.`;
    console.log(msg);
    this.logsEmprestimos.push(msg);
  }
}
