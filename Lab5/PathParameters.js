export default function PathParameters(app) {
  app.get("/lab5/add/:a/:b", (req, res) => {      // route expects 2 path parameters after /lab5/add
    const { a, b } = req.params;                  // retrieve path parameters as strings
    const sum = parseInt(a) + parseInt(b);        // parse as integers and adds
    res.send(sum.toString());                     // sum as string sent back as response
  });                                             // don't send integers since can be interpreted as status

  app.get("/lab5/subtract/:a/:b", (req, res) => { // route expects 2 path parameters after /lab5/subtract
    const { a, b } = req.params;                  // retrieve path parameters as strings
    const sum = parseInt(a) - parseInt(b);        // parse as integers and subtracts
    res.send(sum.toString());                     // subtraction as string sent back as response
  });                                             // response is converted to string otherwise browser

  app.get("/lab5/multiply/:a/:b", (req, res) => { // route expects 2 path parameters after /lab5/multiply
    const { a, b } = req.params;                  // retrieve path parameters as strings
    const sum = parseInt(a) * parseInt(b);        // parse as integers and multiplies
    res.send(sum.toString());                     // multiplication as string sent back as response
  });                                             // response is converted to string otherwise browser
  
  app.get("/lab5/divide/:a/:b", (req, res) => {   // route expects 2 path parameters after /lab5/divide
    const { a, b } = req.params;                  // retrieve path parameters as strings
    const sum = parseInt(a) / parseInt(b);        // parse as integers and divides
    res.send(sum.toString());                     // division as string sent back as response
  });                                             // response is converted to string otherwise browser
};                                                // would interpret integer response as a status code