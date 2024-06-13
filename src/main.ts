import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

// function name could be any name
async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // create instance of a next application
  await app.listen(3000);
}

bootstrap().then();
