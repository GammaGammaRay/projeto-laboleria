import { insertClientDB } from "../repositories/clients.repository.js";
import { getOrdersByClient } from "../repositories/orders.repository.js";

export async function newClient(req, res) {
    const clientObj = req.body;
  
    try {
      const client = await insertClientDB(clientObj);
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.status(500).send(err.message);
    }
  }

  export async function getClientOrders(req, res) {
    const clientId = parseInt(req.params.id, 10); 
    
    try {
        const clientOrders = await getOrdersByClient(clientId);
        res.status(200).send(clientOrders);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}