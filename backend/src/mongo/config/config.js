// Import mongoose
import mongoose from "mongoose"

// dbCnx
const conectarDB = async () => {
    try {
        const conexion = await mongoose.connect(process.env.MONGO_URI , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const url = `MONGODB HOST:${conexion.connection.host}  - PORT:${conexion.connection.port}`
        console.log(url); 
    } catch (error) {
        console.log(error); 
    }
}

// Export
export default conectarDB;