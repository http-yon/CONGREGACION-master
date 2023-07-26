import dotenv from "dotenv"

dotenv.config()

import ServerMongo from "./src/mongo/server/Server.js"
import ServerMySql from "./src/mysql/server/server.js"

const serverMongo = new ServerMongo()
const serverMySql = new ServerMySql() 

serverMongo.listener()
serverMySql.listener()

