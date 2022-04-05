import { EntityManager } from "typeorm";
import { AppDataSource } from "./DatabaseConnection";

export type WithTransaction = (
  fn: (txn: EntityManager, ...args: any[]) => any
) => (...args: any[]) => any;

const withTransaction: WithTransaction = (fn) => {
  return async (...originalParams: any[]) => {
    const response = await AppDataSource.transaction(async (txn) => {
      const response = await fn(txn, ...originalParams);
      return response;
    });
    return response;
  };
};

export default withTransaction;
