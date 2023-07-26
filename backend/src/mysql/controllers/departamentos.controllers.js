//import dbConection
import dbConnection from "../config/dbConnection.js";

//get
const getDepa = async (req, res) =>{
    try {
        const connection = await dbConnection();
        const result = await connection.query("SELECT * FROM Departamento");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



//getOne
const getOneDepa = async (req, res) => {
    try {
      const {id} = req.params;
      const connection = await dbConnection();
      const result = await connection.query("SELECT * FROM Departamento WHERE idDepartamento=?", id);
      console.log(result);
      res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    };
};



//insert
const insertDepa = async (req, res) =>{
    try {
        const connection = await dbConnection();
        const result = await connection.query("INSERT INTO Departamento SET?", req.body);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


//delete
const deleteDepa = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await dbConnection();
        const result = await connection.query("DELETE FROM Departamento WHERE idDepartamento =?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//update
const updateDepa = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await dbConnection();
        const result = await connection.query("UPDATE Departamento SET ? WHERE idDepartamento =?", [req.body, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//export const 
export const methodsHTTP = {
    getDepa,getOneDepa,insertDepa,deleteDepa,updateDepa
}