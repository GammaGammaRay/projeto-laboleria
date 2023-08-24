import { Router } from "express";

const OrderRouter = Router();

OrderRouter.post("/orders");
OrderRouter.get("/orders");
OrderRouter.get("/orders:id");

export { OrderRouter };
