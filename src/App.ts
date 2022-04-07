import "reflect-metadata";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "type-graphql";
import dotenv from "dotenv";
import { isNil } from "lodash";
// import Resolver from "./modules/recipe/resolvers";

export default class App {
  static runServer = async () => {
    dotenv.config();
    const schema = await buildSchema({
      resolvers: [`${__dirname}/modules/**/resolvers/index.ts`],
    });

    const app = express();

    app.use(
      "/",
      graphqlHTTP({
        schema,
        graphiql: true,
      })
    );

    const serverPort = process.env.PORT;

    if (isNil(serverPort)) {
      throw new Error("Server port not found!");
    }

    app.listen(serverPort);

    return { serverPort };
  };
}
