import { pool } from "../connection.js";

const getCategorie = (req, res) => {

  pool.getConnection((err, connection) => {
    if (err) {
      res.status(400).json({ error: "connection_error" });
      return;
    }

    let query = "SELECT * from categorieen";

    connection.query(query, (err, rows) => {
      connection.release();

      if (err) {
        res.status(400).json({ error: "query_error" });
        return;
      } else {
        res.json(rows);
        console.log(rows);
      }
    });
  });
};

export default getCategorie;
