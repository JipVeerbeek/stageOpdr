import { pool } from "../connection.js";

const getList = (req, res) => {
  const id = req.params.id;
  let query = "";
  if (id === undefined) {
    query = "SELECT * from list";
  } 
  else {
    query = "SELECT * from list WHERE id = ?";
  }

  pool.getConnection((err, connection) => {
    if (err) {
      res.status(400).json({ error: "connection_error" });
      return;
    }

    connection.query(query, id, (err, rows) => {
      connection.release();

      if (err) {
        res.status(400).json({ error: "query_error" });
        return;
      } else {
        res.json(rows);
        // console.log(rows);
      }
    });
  });
};

export default getList;
