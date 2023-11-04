import { pool } from "../connection.js";

const patchList = (req, res) => {
  const checked = req.body.checked;
  const task = req.body.task
  const id = req.params.id;
  let query = "";
  let values = [];

  if (id === undefined) {
    return res.status(400).json({ error: "Missing parameters" });
  }
  if (checked !== undefined) {
    query = "UPDATE list SET checked = ? WHERE id = ?";
    values = [checked, id];
  }
  if (task !== undefined) {
    query = "UPDATE list SET task = ? WHERE id = ?";
    values = [task, id];
  }

  pool.getConnection((err, connection) => {
    if (err) return res.status(400).json({ error: "connection_error" });
    
    connection.query(query, values, (err, result) => {
      connection.release();

      if (err) return res.status(400).json({ error: "query_error" });
      
      res.send(result);
    });
  });
};

export default patchList;
