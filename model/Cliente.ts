import { Observer } from "../interface/Observer";

export class Cliente implements Observer {
  private usuario: string;
  private senha: string;
  private sexo: string;
  private divida: boolean;

  constructor(usuario: string, senha: string, sexo: string) {
    this.usuario = usuario;
    this.senha = senha;
    this.sexo = sexo;
    this.divida = false;
  }

  public login(): void {
    // Implementação do login
  }

  public logout(): void {
    // Implementação do logout
  }

  public emprestarLivro(): void {
    // Implementação do empréstimo de livro
  }

  public devolverLivro(): void {
    // Implementação do retorno de livro
  }

  public atualizar(): void {
    // Atualiza o status do usuário
  }
}
