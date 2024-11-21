import * as dao from "./dao.js";

export default function ModuleRoutes(app) {

  const updateModule = (req, res) => {
    const { moduleId } = req.params;
    const moduleUpdates = req.body;
    dao.updateModule(moduleId, moduleUpdates);
    res.sendStatus(204);
  };

  const deleteModule = (req, res) => {
    const { moduleId } = req.params;
    dao.deleteModule(moduleId);
    res.sendStatus(204);
  };

  app.put("/api/modules/:moduleId", updateModule);
  app.delete("/api/modules/:moduleId", deleteModule);
}