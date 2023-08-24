import { getCakePrice } from "../repositories/cakes.repository.js";
import {
    getOrderByIdDB,
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
    res.status(200).send(orders);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}

export async function getOrderById(req, res) {
    const orderId = req.params.id

    try {
      const order = await getOrderByIdDB(orderId);
      res.status(200).send(order);
    } catch (err) {
      console.log(err);
      res.status(500).send(err.message);
    }
  }

export async function getOrderByClient(req, res) {
    const clientId = req.params.id

    try {
      const clientOrders = await getOrderByIdDB(clientId);
      res.status(200).send(clientOrders);
    } catch (err) {
      console.log(err);
      res.status(500).send(err.message);
    }
  }
