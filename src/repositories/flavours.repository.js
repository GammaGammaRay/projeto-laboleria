import { db } from "../database/databaseConnection.js";

export async function insertNewFlavourDB(name) {
  const doesFlavourExist = await checkIfFlavourExists(name);

  if (doesFlavourExist) {
    const error = new Error("Flavor already exists.");
    error.statusCode = 409;
    throw error;
  }

  const result = await db.query(
    "INSERT INTO flavours (name) VALUES ($1) RETURNING id",
    [name]
  );

  return result.rows[0].id;
}

export async function checkIfFlavourExists(name) {
  const result = await db.query("SELECT EXISTS (SELECT 1 FROM flavours WHERE name = $1)", [name]);
  return result.rows[0].exists;
}

