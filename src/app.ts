// lib/app.ts

import express from "express";
import * as bodyParser from "body-parser";
import Routes from "./config/routes";

class App {
 public app: express.Application;
 public routePrv: Routes = new Routes();
 
 public constructor() {
   this.app = express();
   this.config();
   this.routePrv.routes(this.app); 
 }

 private config(): void {
   this.app.use(bodyParser.json());
   this.app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
 }
}

export default new App().app; 