const assignment = {                                          // object state persists as long
  id: 1, title: "NodeJS Assignment",                          // as server is running
  description: "Create a NodeJS server with ExpressJS",       // changes to the object persist
  due: "2021-10-10", completed: false, score: 0,              // rebooting server
};                                                            // resets the object
export default function WorkingWithObjects(app) {
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);                                     // use .json() instead of .send() if you know
  });                                                         // the response is formatted as JSON

  app.get("/lab5/assignment/title", (req, res) => {
    res.json(assignment.title);                               // retrieve specific property    
  });
  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;                          // changes to objects in the server
    assignment.title = newTitle;                              // persist as long as the server is running
    res.json(assignment);                                     // rebooting the server resets the object state
  });

  app.get("/lab5/assignment/score", (req, res) => {
    res.json(assignment.score);
  });
  app.get("/lab5/assignment/score/:newScore", (req, res) => {
    const { newScore } = req.params;
    assignment.score = newScore;
    res.json(assignment);
  });

  app.get("/lab5/assignment/completed", (req, res) => {
    res.json(assignment.completed);
  });
  app.get("/lab5/assignment/completed/:newCompleted", (req, res) => {
    const { newCompleted } = req.params;
    assignment.completed = newCompleted;
    res.json(assignment);
  });
};
