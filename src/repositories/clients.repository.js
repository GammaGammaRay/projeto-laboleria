import { db } from "../database/databaseConnection.js";

export async function insertClientDB(clientObj) {
  const { name, address, phone } = clientObj;

  const result = await db.query(
    `INSERT INTO clients (name, address, phone) VALUES ($1,$2, $3) ON CONFLICT (address) DO NOTHING RETURNING id`,
    [name, address, phone]
  );

  if (result.rows.length > 0) {
    return result.rows[0].id;
  }

  const existingClient = await db.query(`SELECT id FROM clients WHERE name = $1`, [
    name,
  ]);

  return existingClient.rows[0].id;
}

export async function getClientOrdersDB (req, res) {

}