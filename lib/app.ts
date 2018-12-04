import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from './routes/mobile/index';
class App {
  public app: express.Application;
  public routesRoot: Routes = new Routes();
  constructor(){
    this.app = express();
    this.config();
    this.routesRoot.routes(this.app);
  }

  private config(): void{
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
  }
}

export default new App().app;