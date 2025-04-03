
import express, { application } from 'express';
//import mongoose from 'mongoose';
//import bcrypt from 'bcryptjs';
//import jwt from 'jsonwebtoken';
//import cors from 'cors';
//import path from 'path';
import morgan from 'morgan'

import database from "./database.js";

//Configuracion Inicial
const app = express();

app.set("port", 4000)
app.listen(app.get("port"))
console.log("Escuchando comunicaciones al puerto" + app.get("port"));


//Middlewares
app.use(express.json())
app.use(morgan("dev"))

//Rutas

app.get("/cancha", async(req,res) =>{
    const connection = await database.getConnection();
    const result = await connection.query("SELECT * from cancha");
    console.log(result)
})


