import { Notificacao } from "./Notificacao";

export interface FabricaNotificacao {
  criarNotificacao(): Notificacao;
}
