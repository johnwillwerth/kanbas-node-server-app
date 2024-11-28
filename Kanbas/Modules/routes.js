import * as dao from "./dao.js";

export default function ModuleRoutes(app) {

  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    const moduleUpdates = req.body;
    await dao.updateModule(moduleId, moduleUpdates);
    res.sendStatus(204);
  };

  const deleteModule = async (req, res) => {
    const { moduleId } = req.params;
    await dao.deleteModule(moduleId);
    res.sendStatus(204);
  };

  app.put("/api/modules/:moduleId", updateModule);
  app.delete("/api/modules/:moduleId", deleteModule);
}