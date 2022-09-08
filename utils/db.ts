import { DB } from "https://deno.land/x/sqlite@v3.4.1/mod.ts";

export interface DatabaseProp {
  sqlite: Database;
}

export class Database {
  private static sqlite: Database;
  database: DB;

  public constructor() {
    this.database = new DB("database.db");
  }

  public static init() {
    Database.sqlite = new Database();
  }

  public static instance() {
    if (this.sqlite) return this.sqlite;
    else throw new Error("Context is not initialized!");
  }
}
