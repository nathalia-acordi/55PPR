import { Notificacao } from "../interface/Notificacao";

export class SMSNotificacao implements Notificacao {
  enviar() {
    console.log("Enviando notificação por SMS");
  }
}
