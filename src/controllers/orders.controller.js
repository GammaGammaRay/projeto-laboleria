import { getCakePrice } from "../repositories/cakes.repository.js";
import {
  getOrdersDB,
  insertOrderDB,
} from "../repositories/orders.repository.js";

export async function createOrder(req, res) {
  const orderObj = req.body;

  try {
    const order = await insertOrderDB(orderObj);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}

export async function getOrders(req, res) {
  try {
    const orders = await getOrdersDB();
    res.status(201).send(orders);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}
