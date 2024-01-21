import { Cliente } from "./Cliente";
import { Livro } from "./Livro";

class DatabaseConnection {
  private static instance: DatabaseConnection;

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }
}
