//dependẽncias instaladas npm i @types/express @types/node ts-node typescript nodemon // the ts-node runs and compile
import express from "express";
import { router } from "./router";

export class App{
    public server: express.Application;

    constructor(){
        this.server = express();
        this.middleware();
        this.router();
    }

    private middleware(){
        this.server.use(express.json());
    }

    private router(){
        this.server.use(router);
    }
}