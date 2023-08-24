import { Router } from "express";
import { createOrder, getOrders } from "../controllers/orders.controller.js";

const OrderRouter = Router();

OrderRouter.post("/orders", createOrder);
OrderRouter.get("/orders", getOrders);
OrderRouter.get("/orders:id");

export { OrderRouter };
