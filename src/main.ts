import {Controller, Get, Module} from "@nestjs/common";

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
