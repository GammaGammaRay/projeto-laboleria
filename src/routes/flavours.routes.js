import { Router } from "express";
import { newFlavour } from "../controllers/flavours.controller.js";

const FlavourRouter = Router()

FlavourRouter.post("/flavours", newFlavour)

export {FlavourRouter}