import {config} from "dotenv"

config()

const connection = {
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USUARIO,
    password: process.env.PASSWORD
}

export default connection
