import {Controller, Get, Module} from "@nestjs/common";
import {NestFactory} from "@nestjs/core";

@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return 'hi there';
  }
}

@Module({
  controllers: [AppController]
})
class AppModule {}

// function name could be any name
async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // create instance of a next application
  await app.listen(3000);
}

bootstrap().then();
