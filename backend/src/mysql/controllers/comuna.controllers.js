//import dbConection
import dbConnection from "../config/dbConnection.js";

//get
const getComu = async (req, res) =>{
    try {
        const connection = await dbConnection();
        const result = await connection.query("SELECT * FROM Comuna");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



//getOne
const getOneComu = async (req, res) => {
    try {
      const {id} = req.params;
      const connection = await dbConnection();
      const result = await connection.query("SELECT * FROM Comuna WHERE idComuna=?", id);
      console.log(result);
      res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    };
};



//insert
const insertComu = async (req, res) =>{
    try {
        const connection = await dbConnection();
        const result = await connection.query("INSERT INTO Comuna SET?", req.body);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


//delete
const deleteComu = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await dbConnection();
        const result = await connection.query("DELETE FROM Comuna WHERE idComuna =?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//update
const updateComu = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await dbConnection();
        const result = await connection.query("UPDATE Comuna SET ? WHERE idComuna =?", [req.body, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//export const 
export const methodsHTTP = {
    getComu,getOneComu,insertComu,deleteComu,updateComu
}