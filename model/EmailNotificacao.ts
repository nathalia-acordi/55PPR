import { Notificacao } from "../interface/Notificacao";

export class EmailNotificacao implements Notificacao {
  enviar() {
    console.log("Enviando notificação por email");
  }
}
