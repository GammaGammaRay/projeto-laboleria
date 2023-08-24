import { Router } from "express";
import { OrderRouter } from "./order.routes";
import { ClientsRouter } from "./clients.routes";
import { CakesRouter } from "./cakes.routes";

const IndexRouter = Router();

IndexRouter.use(CakesRouter);
IndexRouter.use(ClientsRouter);
IndexRouter.use(OrderRouter)

export { IndexRouter };
