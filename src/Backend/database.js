import mysql from 'promise-mysql';
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createConnection({
    host:process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    puerto : process.env.PUERTO
})

const getConnection = async ()=> await connection;

export default {
    getConnection
}

