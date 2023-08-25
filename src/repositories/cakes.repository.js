import { db } from "../database/databaseConnection.js";

export async function insertCakeDB(cakeObj) {
  const { name, price, image, description, flavour } = cakeObj;

  const doesFlavourExist = await db.query(
    `SELECT EXISTS (SELECT 1 FROM flavours WHERE id = $1)`,
    [flavour]
  );

  if (!doesFlavourExist.rows[0].exists) {
    const error = new Error("Flavour not found.");
    error.statusCode = 404;
    throw error;
  }

  const result = await db.query(
    `INSERT INTO cakes (name, price, image, description, "flavourId") VALUES ($1, $2, $3, $4, $5) ON CONFLICT (name) DO NOTHING RETURNING id`,
    [name, price, image, description, flavour]
  );

  if (result.rows.length > 0) {
    return result.rows[0].id;
  }

  const existingCake = await db.query(`SELECT id FROM cakes WHERE name = $1`, [
    name,
  ]);

  return existingCake.rows[0].id;
}
