//import dbConection
import dbConnection from "../config/dbConnection.js";

//get
const getCreyente = async (req, res) =>{
    try {
        const connection = await dbConnection();
        const result = await connection.query("SELECT * FROM Creyente");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



//getOne
const getOneCreyente = async (req, res) => {
    try {
      const {id} = req.params;
      const connection = await dbConnection();
      const result = await connection.query("SELECT * FROM Creyente WHERE idIdentificacion=?", id);
      console.log(result);
      res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    };
};



//insert
const insertCreyente = async (req, res) =>{
    try {
        const connection = await dbConnection();
        const result = await connection.query("INSERT INTO Creyente SET?", req.body);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


//delete
const deleteCreyente = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await dbConnection();
        const result = await connection.query("DELETE FROM Creyente WHERE idIdentificacion =?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//update
const updateCreyente = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await dbConnection();
        const result = await connection.query("UPDATE Creyente SET ? WHERE idIdentificacion =?", [req.body, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//export const 
export const methodsHTTP = {
    getCreyente,getOneCreyente,insertCreyente,deleteCreyente,updateCreyente
}