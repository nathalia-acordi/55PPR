import { Observado } from "../interface/Observado";
import { Observer } from "../interface/Observer";
import { Prototype } from "../interface/Prototype";

export class Livro implements Prototype, Observado {
  private observers: Observer[] = [];
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

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    this.observers.forEach((observer) => observer.update(this));
  }

  emprestar(): void {
    this._estado = "Emprestado";
    this.notifyObservers();
  }

  devolver(): void {
    this._estado = "Disponível";
    this.notifyObservers();
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
