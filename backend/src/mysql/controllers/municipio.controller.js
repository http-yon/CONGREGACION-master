//import dbConection
import dbConnection from "../config/dbConnection.js";

//get
const getMuni = async (req, res) =>{
    try {
        const connection = await dbConnection();
        const result = await connection.query("SELECT * FROM Municipio");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



//getOne
const getOneMuni = async (req, res) => {
    try {
      const {id} = req.params;
      const connection = await dbConnection();
      const result = await connection.query("SELECT * FROM Municipio WHERE idMunicipio=?", id);
      console.log(result);
      res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    };
};



//insert
const insertMuni = async (req, res) =>{
    try {
        const connection = await dbConnection();
        const result = await connection.query("INSERT INTO Municipio SET?", req.body);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


//delete
const deleteMuni = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await dbConnection();
        const result = await connection.query("DELETE FROM Municipio WHERE idMunicipio =?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//update
const updateMuni = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await dbConnection();
        const result = await connection.query("UPDATE Municipio SET ? WHERE idMunicipio =?", [req.body, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//export const 
export const methodsHTTP = {
    getMuni,getOneMuni,insertMuni,deleteMuni,updateMuni
}