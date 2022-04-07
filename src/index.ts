import "reflect-metadata";
import App from "./App";
import DatabaseConnection from "./DatabaseConnection";
import 'module-alias/register';
async function init() {
  try {
    await DatabaseConnection.initialize();
    console.log("Database connected successfully");
    try {
      const { serverPort } = await App.runServer();
      console.log(`Server is Ready on Port ${serverPort}`);
    } catch (error) {
      console.log(
        "An error has ocurred when the app was inicializing: ",
        error
      );
    }
  } catch (error) {
    console.log(
      "An error has ocurred when the app was connecting to the database: ",
      error
    );
  }
}

function test() {
  const Service = (): ClassDecorator => {
    return (target) => {
      console.log(Reflect.getMetadata("design:paramtypes", target));
    };
  };

  class Bar {}

  @Service()
  class Foo {
    constructor(bar: Bar, baz: string) {
      console.log({ bar, baz });
    }
  }

  new Foo(new Bar(), "");
}

// test();

init();
