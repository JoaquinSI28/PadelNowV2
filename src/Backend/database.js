import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createConnection({
    host: "localhost",
    database: "cancha",
    user: "root",
    password: "200428",
    port: 5000,
})

const getConnection = async ()=> await connection;

export default getConnection;


