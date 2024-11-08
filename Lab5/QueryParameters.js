export default function QueryParameters(app) {
  app.get("/lab5/calculator", (req, res) => { // e.g., lab5/calculator?a=5&b=2&operation=add
    const { a, b, operation } = req.query;    // retrieve a, b, and operation parameters in query
    let result = 0;
    switch (operation) {
      case "add":
        result = parseInt(a) + parseInt(b);   // parse as integers since parameters are strings
        break;
      case "subtract":
        result = parseInt(a) - parseInt(b);   // parse as integers since parameters are strings
        break;
      case "multiply":
        result = parseInt(a) * parseInt(b);   // parse as integers since parameters are strings
        break;
      case "divide":
        result = parseInt(a) / parseInt(b);   // parse as integers since parameters are strings
        break;
      default:
        result = "Invalid operation";
    }
    res.send(result.toString());              // convert to string otherwise browser interprets
  });                                         // as a status code
}