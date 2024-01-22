import { Livro } from "../model/Livro";

export interface Observer {
  update(livro: Livro): void;
}
