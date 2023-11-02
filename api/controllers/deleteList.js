import { pool } from "../connection.js";

const deleteList = (req, res) => {
  const id = req.params.id;

  if (id === undefined) return res.status(400).json({ error: "Missing parameters" });

  pool.getConnection((err, connection) => {
    if (err) return res.status(400).json({ error: "connection_error" });

    const query = "DELETE FROM list WHERE id = ?";
    const values = [id];

    connection.query(query, values, (err, result) => {
      connection.release();

      if (err) return res.status(400).json({ error: "query_error" });
      
      res.send(result);
    });
  });
};

export default deleteList;