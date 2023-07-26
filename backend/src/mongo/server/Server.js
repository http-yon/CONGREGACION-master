import express from "express";
import cors from "cors"
import conectarDB from "../config/config.js";
import creyenteRouter from "../routes/creyente.routes.js"

class ServerMongo {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //* RUTAS PATH
        this.creyentePath = "/cong/creyentes";

        //* Middleware 
        this.middleware();

        //* Routes
        this.routes();

        //* base de datos
        this.conectDB()
    }

    async conectDB(){
        await conectarDB()
    }

    middleware(){
        //? Configuracion de cors 
        this.app.use(cors());

        //? Reconozca formato JSON
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.creyentePath, creyenteRouter);
    }

    listener(){
        this.app.listen(this.port , ()=> {
            console.log(`SERVER MONGODB RUNNING ON PORT ${this.port}`);
        })
    }
}

export default ServerMongo;