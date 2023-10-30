import { pool } from "../connection.js";

const patchList = (req, res) => {
  const checked = req.body;
  const id = req.params.id;
  //   console.log(req.body);

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

      if (err) {
        res.status(400).json({ error: "query_error" });
        return;
      } else {
        res.json({ message: "Updated" });
      }
    });
  });
};

export default patchList;
