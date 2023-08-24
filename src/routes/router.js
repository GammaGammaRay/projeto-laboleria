import { Router } from "express";
import { OrderRouter } from "./orders.routes.js";
import { ClientsRouter } from "./clients.routes.js";
import { CakesRouter } from "./cakes.routes.js";

const IndexRouter = Router();

IndexRouter.use(CakesRouter);
IndexRouter.use(ClientsRouter);
IndexRouter.use(OrderRouter)

export { IndexRouter };
