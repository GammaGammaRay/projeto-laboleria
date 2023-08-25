import { insertNewFlavourDB } from "../repositories/flavours.repository.js";

export async function newFlavour(req, res) {
  const { name } = req.body;

  try {
    const flavour = await insertNewFlavourDB(name);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}
