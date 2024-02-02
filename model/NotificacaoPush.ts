import { NotificacaoPush } from "../interface/FabricaNotificacaoPush";

export class NotificacaoPushConcreta implements NotificacaoPush {
  enviar(): void {
      this.enviarPush();
  }
  
  enviarPush(): void {
    console.log("Enviando notificação push");
  }
}
