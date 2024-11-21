import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  
  const updateAssignment = (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    dao.updateAssignment(assignmentId, assignmentUpdates);
    res.sendStatus(204);
  }

  const deleteAssignment = (req, res) => {
    const { assignmentId } = req.params;
    dao.deleteAssignment(assignmentId);
    res.sendStatus(204);
  }

  app.put("/api/assignments/:assignmentId", updateAssignment);
  app.delete("/api/assignments/:assignmentId", deleteAssignment);

}