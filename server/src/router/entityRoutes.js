const router = require("express").Router(); 
const entityControllers = require("../controller/crud/index.js");
const { catchError } = require("../utils/catchError.js");

const registerRoutes = (model, controller) => {
  model = model.toLowerCase();
  router.post(`/${model}`, catchError(controller.create));
  router.get(`/${model}/:id`, catchError(controller.read));
  router.put(`/${model}/:id`, catchError(controller.update));
  router.delete(`/${model}/:id`, catchError(controller.delete));
  router.get(`/list/${model}`, catchError(controller.list));
}

Object.entries(entityControllers).map(([name, controller]) => {
  registerRoutes(name, controller)
})


module.exports = router;