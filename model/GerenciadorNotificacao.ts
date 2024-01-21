import { FabricaNotificacao } from "../interface/FabricaNotificacao";
import { Notificacao } from "../interface/Notificacao";

export class GerenciadorNotificacao {
  private fabrica: FabricaNotificacao;

  constructor(fabrica: FabricaNotificacao) {
    this.fabrica = fabrica;
  }

  criarNotificacao(): Notificacao {
    return this.fabrica.criarNotificacao();
  }
}
