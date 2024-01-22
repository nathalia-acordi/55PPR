import { FabricaEmail } from "./FabricaEmail";
import { FabricaSMS } from "./FabricaSMS";
import { GerenciadorNotificacao } from "./GerenciadorNotificacao";

class ServicoNotificacao {
  private gerenciadorNotificacao: GerenciadorNotificacao;

  constructor(gerenciadorNotificacao: GerenciadorNotificacao) {
    this.gerenciadorNotificacao = gerenciadorNotificacao;
  }

  enviarNotificacao(tipoNotificacao: string): void {
    if (tipoNotificacao === "email") {
      let fabricacaoEmail = new FabricaEmail();
      this.gerenciadorNotificacao = new GerenciadorNotificacao(fabricacaoEmail);
    } else if (tipoNotificacao === "sms") {
      let fabricacaoSMS = new FabricaSMS();
      this.gerenciadorNotificacao = new GerenciadorNotificacao(fabricacaoSMS);
    }
    let notificacao = this.gerenciadorNotificacao.criarNotificacao();
    notificacao.enviar();
  }
}
