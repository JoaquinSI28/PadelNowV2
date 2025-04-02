
import express, { application } from 'express';
//import mongoose from 'mongoose';
//import bcrypt from 'bcryptjs';
//import jwt from 'jsonwebtoken';
//import cors from 'cors';
//import path from 'path';

const app = express();

app.set("port", 4000)
app.listen(app.get("port"))
console.log("Escuchando comunicaciones al puerto" + app.get("port"));