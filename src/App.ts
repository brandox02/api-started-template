import "reflect-metadata";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "type-graphql";
import recipeResolver from "./modules/recipe/resolvers";
import dotenv from "dotenv";
import { isNil } from "lodash";

export default class App {
  static runServer = async () => {
    dotenv.config();

    const schema = await buildSchema({
      resolvers: [recipeResolver],
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

// export default async () => {
//   // Construct a schema, using GraphQL schema language
//   const schema = await buildSchema({
//     resolvers: [recipeResolver],
//   });

//   const app = express();

//   app.use(
//     "/",
//     graphqlHTTP({
//       schema,
//       graphiql: true,
//     })
//   );

//   app.listen(4000);

//   console.log("Running a GraphQL API server");
// };
