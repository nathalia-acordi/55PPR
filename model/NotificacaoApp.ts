import { NotificacaoApp } from "../interface/FabricaNotificacaoApp";

export class NotificacaoAplicativoConcreta implements NotificacaoApp {
    enviar(): void {
        this.enviarApp();
    }
    enviarApp(): void {
       console.log("Enviando notificação de aplicativo");
    }
   }