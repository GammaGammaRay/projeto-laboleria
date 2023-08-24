import { Router } from "express";
import { getClientOrders, newClient } from "../controllers/clients.controller.js";
import { schemaValidation } from "../middleware/schemaValidation.js";
import { clientSchema } from "../schemas/clients.schema.js";

const ClientsRouter = Router();

ClientsRouter.post("/clients", schemaValidation(clientSchema), newClient);
ClientsRouter.get("/clients/:id/orders", getClientOrders);

export { ClientsRouter };
