import express from 'express';
import Hello from "./Hello.js"; // import Hello from Hello.js
const app = express() // create new express instance
Hello(app) // pass app reference to Hello
app.listen(4000) // listen to http://localhost:4000