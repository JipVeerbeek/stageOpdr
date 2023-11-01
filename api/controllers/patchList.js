import { pool } from "../connection.js";

const patchList = (req, res) => {
  const checked = req.body.checked;
  const id = req.params.id;

  if (checked === undefined || id === undefined) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  pool.getConnection((err, connection) => {
    if (err) {
      res.status(400).json({ error: "connection_error" });
      return;
    }

    const query = "UPDATE list SET checked = ? WHERE id = ?";
    const values = [checked, id];

    connection.query(query, values, (err, result) => {
      connection.release();

      if (err) return res.status(400).json({ error: "query_error" });
      res.send(result);
    });
  });
};

export default patchList;
