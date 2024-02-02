import { Command } from "../interface/Command";

export class Invoker {
  private command: Command;

  setCommand(command: Command): void {
    this.command = command;
  }

  executeCommand(): void {
    if (this.command) {
      this.command.execute();
    } else {
      console.log("Nenhum comando");
    }
  }

  undoCommand(): void {
    if (this.command) {
      this.command.undo();
    } else {
      console.log("Nenhum comando");
    }
  }
}
