import express from "express";
import cors from 'cors';
import conectarDB from "../config/dbConnection.js";
import depaRouter from "../routes/departamentos.routes.js";
import muniRouter from "../routes/municipios.routes.js";
import comuRouter from "../routes/comunas.routes.js"
import barrioRouter from "../routes/barrios.routes.js";
import creyenteRouter from "../routes/creyentes.routes.js";


class ServerMySql{

    constructor(){
        this.app = express();
        this.port = process.env.PORTSQL;
        this.departamentosPath = '/api/departamentos';
        this.municipiosPath = "/api/municipios"
        this.comunasPath = "/api/comunas"
        this.barrioPath = "/api/barrios"
        this.creyentePath = "/api/creyentes"

        this.conectar();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    async conectar(){
        await conectarDB();
    }

    routes(){
        this.app.use(this.departamentosPath,depaRouter)
        this.app.use(this.municipiosPath,muniRouter)
        this.app.use(this.comunasPath,comuRouter)
        this.app.use(this.barrioPath,barrioRouter)
        this.app.use(this.creyentePath,creyenteRouter)

    }

    listener(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER MYSQL RUNNING ON PORT ${this.port}`);
        });
    }
}

export default ServerMySql;