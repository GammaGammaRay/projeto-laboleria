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
