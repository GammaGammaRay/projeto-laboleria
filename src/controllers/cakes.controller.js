import { insertCakeDB } from "../repositories/cakes.repository.js";



export async function newCake(req, res) {
    const cakeObj = req.body;
    try {
      const cake = await insertCakeDB(cakeObj);
      res.sendStatus(201);
    } catch (err) {
      console.log(err.message);
      res.status(500).send(err.message);
    }
  }