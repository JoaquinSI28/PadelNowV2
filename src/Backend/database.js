import mysql from 'promise-mysql';
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createConnection({
    host: "localhost",
    database: "cancha",
    user: "root",
    password: "200428",
    port: 4000,
})

const getConnection = async ()=> await connection;

export default getConnection;


