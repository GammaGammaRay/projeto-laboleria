import { Router } from "express";

const ClientsRouter = Router();

ClientsRouter.post("/clients");
ClientsRouter.get("/clients/:id/orders");

export { ClientsRouter };
