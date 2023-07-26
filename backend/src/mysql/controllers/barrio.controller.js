//import dbConection
import dbConnection from "../config/dbConnection.js";

//get
const getBarrio = async (req, res) =>{
    try {
        const connection = await dbConnection();
        const result = await connection.query("SELECT * FROM Barrio");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



//getOne
const getOneBarrio = async (req, res) => {
    try {
      const {id} = req.params;
      const connection = await dbConnection();
      const result = await connection.query("SELECT * FROM Barrio WHERE idBarrio=?", id);
      console.log(result);
      res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    };
};



//insert
const insertBarrio = async (req, res) =>{
    try {
        const connection = await dbConnection();
        const result = await connection.query("INSERT INTO Barrio SET?", req.body);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


//delete
const deleteBarrio = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await dbConnection();
        const result = await connection.query("DELETE FROM Barrio WHERE idBarrio =?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//update
const updateBarrio = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await dbConnection();
        const result = await connection.query("UPDATE Barrio SET ? WHERE idBarrio =?", [req.body, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//export const 
export const methodsHTTP = {
    getBarrio,getOneBarrio,insertBarrio,deleteBarrio,updateBarrio
}