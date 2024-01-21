import { FabricaNotificacao } from "../interface/FabricaNotificacao";
import { Notificacao } from "../interface/Notificacao";
import { SMSNotificacao } from "./SMSNotificacao";

export class FabricaSMS implements FabricaNotificacao {
  criarNotificacao(): Notificacao {
    return new SMSNotificacao();
  }
}
