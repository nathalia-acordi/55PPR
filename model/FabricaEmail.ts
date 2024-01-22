import { FabricaNotificacao } from "../interface/FabricaNotificacao";
import { Notificacao } from "../interface/Notificacao";
import { EmailNotificacao } from "./EmailNotificacao";

export class FabricaEmail implements FabricaNotificacao {
  criarNotificacao(): Notificacao {
    return new EmailNotificacao();
  }
}
