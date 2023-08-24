import { Router } from "express";
import { createOrder, getOrderById, getOrders } from "../controllers/orders.controller.js";
import { schemaValidation } from "../middleware/schemaValidation.js";
import { orderSchema } from "../schemas/order.schema.js";

const OrderRouter = Router();

OrderRouter.post("/orders", schemaValidation(orderSchema), createOrder);
OrderRouter.get("/orders", getOrders);
OrderRouter.get("/orders/:id", getOrderById);

export { OrderRouter };
