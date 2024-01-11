import { Prototype } from "../interface/Prototype";

export class Livro implements Prototype {
  private _titulo: string;
  private _autor: string;
  private _isbn: string;
  private _estado: string;

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

  clone(): Prototype {
    let livroClone = Object.create(this);
    livroClone.titulo = this.titulo;
    livroClone.autor = this.autor;
    livroClone.isbn = this.isbn;
    livroClone.estado = this.estado;
    return livroClone;
  }

  get titulo(): string {
    return this._titulo;
  }
 
  set titulo(val: string) {
    this._titulo = val;
  }
 
  get autor(): string {
    return this._autor;
  }
 
  set autor(val: string) {
    this._autor = val;
  }
 
  get isbn(): string {
    return this._isbn;
  }
 
  set isbn(val: string) {
    this._isbn = val;
  }
 
  get estado(): string {
    return this._estado;
  }
 
  set estado(val: string) {
    this._estado = val;
  }
}
