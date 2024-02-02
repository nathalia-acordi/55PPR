import { Notificacao } from "./Notificacao";

export interface NotificacaoPush extends Notificacao {
  enviarPush(): void;
}
