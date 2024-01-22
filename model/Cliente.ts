export class Cliente  {
  public usuario: string;
  private _senha: string;
  private _sexo: string;
  private _divida: boolean;
  private _tipo: number;

  constructor(usuario: string, senha: string, sexo: string, tipo: number) {
    this.usuario = usuario;
    this._senha = senha;
    this._sexo = sexo;
    this._tipo = tipo;
    this._divida = false;
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
}
