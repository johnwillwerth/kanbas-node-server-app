import express from 'express';
import Hello from "./Hello.js";      // import Hello from Hello.js
import Lab5 from "./Lab5/index.js";  // import Lab5
const app = express()                // create new express instance
Lab5(app);                           // pass reference to express module
Hello(app);                          // pass app reference to Hello
app.listen(process.env.PORT || 4000) // listen to http://localhost:4000