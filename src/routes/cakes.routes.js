import { Router } from "express";
import { schemaValidation } from "../middleware/schemaValidation.js";
import { cakeSchema } from "../schemas/cake.schema.js";
import { newCake } from "../controllers/cakes.controller.js";

const CakesRouter = Router();

CakesRouter.post("/cakes", schemaValidation(cakeSchema), newCake);

export { CakesRouter };
