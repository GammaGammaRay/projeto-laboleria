import { db } from "../database/databaseConnection.js";

export async function insertOrderDB(orderObj) {
  const { clientId, cakeId, quantity, totalPrice } = orderObj;

  const result = await db.query(
    `INSERT INTO orders ("clientId", "cakeId", quantity,"totalPrice") VALUES ($1,$2, $3, $4)`,
    [clientId, cakeId, quantity, totalPrice]
  );

  console.log(result);

  return result.rows[0];
}

export async function getOrdersDB() {
  const result = await db.query(`
    SELECT
    json_build_object(
        'client', json_build_object(
            'id', c.id,
            'name', c.name,
            'address', c.address,
            'phone', c.phone
        ),
        'cake', json_build_object(
            'id', ck.id,
            'name', ck.name,
            'price', ck.price,
            'description', ck.description,
            'image', ck.image,
            'flavour', f.name
        ),
        'orderId', o.id,
        'createdAt', o."createdAt",
        'quantity', o.quantity,
        'totalPrice', o."totalPrice"
    ) AS order_data
FROM
    orders o
JOIN
    clients c ON o."clientId" = c.id
JOIN
    cakes ck ON o."cakeId" = ck.id
JOIN
    flavours f ON ck."flavourId" = f.id;
        `);

  return result.rows;
}

export async function getOrderByIdDB(orderId) {
  const result = await db.query(
    `
        SELECT
        json_build_object(
            'client', json_build_object(
                'id', c.id,
                'name', c.name,
                'address', c.address,
                'phone', c.phone
            ),
            'cake', json_build_object(
                'id', ck.id,
                'name', ck.name,
                'price', ck.price,
                'description', ck.description,
                'image', ck.image,
                'flavour', f.name
            ),
            'orderId', o.id,
            'createdAt', o."createdAt",
            'quantity', o.quantity,
            'totalPrice', o."totalPrice"
        ) AS order_data
    FROM
        orders o
    JOIN
        clients c ON o."clientId" = c.id
    JOIN
        cakes ck ON o."cakeId" = ck.id
    JOIN
        flavours f ON ck."flavourId" = f.id
    WHERE
        o.id = $1;
            `,
    [orderId]
  );

  return result.rows;
}

export async function getOrdersByClient(clientId) {
  const result = await db.query(
    `SELECT
    json_build_object(
      'client', json_build_object(
        'id', c.id,
        'name', c.name,
        'address', c.address,
        'phone', c.phone
      ),
      'cake', json_build_object(
        'id', ck.id,
        'name', ck.name,
        'price', ck.price,
        'description', ck.description,
        'image', ck.image,
        'flavour', f.name
      ),
      'orderId', o.id,
      'createdAt', o."createdAt",
      'quantity', o.quantity,
      'totalPrice', o."totalPrice"
    ) AS order_data
  FROM
    orders o
  JOIN
    clients c ON o."clientId" = c.id
  JOIN
    cakes ck ON o."cakeId" = ck.id
  JOIN
    flavours f ON ck."flavourId" = f.id
  WHERE
    c.id = $1;`,
    [clientId]
  );

  return result.rows;
}
