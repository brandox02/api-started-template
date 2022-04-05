import "reflect-metadata";
import { DataSource } from "typeorm";
import Entity from "./modules/recipe/schemas/types";
import dotenv from "dotenv";
// ./modules/**/schemas/index.schema.ts


export let AppDataSource: DataSource | null = null;
export default class DatabaseConnection {
  static AppDataSource: DataSource | null = null;

  static initialize = () => {
    dotenv.config();

    const appDataSource = new DataSource({
      type: "postgres",
      host: process.env.DB_ENDPOINT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT),
      synchronize: true,
      logging: false,
      entities: [Entity],
      // migrations: [],
      // subscribers: [],
    });

    const inicializedPromise = appDataSource.initialize();

    AppDataSource = appDataSource;

    return inicializedPromise;
  };
}
