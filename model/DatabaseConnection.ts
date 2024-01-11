class DatabaseConnection {
    private static instance: DatabaseConnection;
    private connection: any;
   
    private constructor() {
      // Inicializa a conexão com o banco de dados
    }
   
    public static getInstance(): DatabaseConnection {
      if (!DatabaseConnection.instance) {
        DatabaseConnection.instance = new DatabaseConnection();
      }
      return DatabaseConnection.instance;
    }
   
    public getConnection(): any {
      return this.connection;
    }
   }