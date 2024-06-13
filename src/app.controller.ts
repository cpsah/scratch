import { Controller, Get } from "@nestjs/common";

// http://localhost:3000/app
@Controller('/app')
export class AppController {
  // http://localhost:3000/app/asd
  @Get('/asd')
  getRootRoute() {
    return 'hi there';
  }

  // http://localhost:3000/app/bye
  @Get('/bye')
  getByThere() {
    return 'bye there';
  }
}
