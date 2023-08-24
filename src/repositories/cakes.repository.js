import { db } from "../database/databaseConnection.js";

export async function insertCakeDB(cakeObj) {
  const { name, price, image, description } = cakeObj;

  const result = await db.query(
    `INSERT INTO cakes (name, price, image,description) VALUES ($1,$2, $3, $4) ON CONFLICT (name) DO NOTHING RETURNING id`,
    [name, price, image, description]
  );

  console.log(result)
  if (result.rows.length > 0) {
    return result.rows[0].id;
  }

  const existingCake = await db.query(`SELECT id FROM cakes WHERE name = $1`, [
    name,
  ]);

  return existingCake.rows[0].id;
}

export async function getCakePrice(cakeId) {
  const unitPrice = await db.query(
    `SELECT price FROM cakes WHERE id = $1
    `,
    [cakeId]
  );

  return totalPrice = unitPrice * quantity;
}