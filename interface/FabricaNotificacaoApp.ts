import { Notificacao } from "./Notificacao";

export interface NotificacaoApp extends Notificacao {
  enviarApp(): void;
}
