import { pool } from "../connection.js";

const postList = (req, res) => {
  const task = req.body.task;
  if (task === "") {
    return res.status(400).json({ error: "Task is empty" });
  }

  pool.getConnection((err, connection) => {
    if (err) return res.status(400).json({ error: "connection_error" });

    const query = "INSERT INTO `list` (`task`) VALUES (?)";
    const values = [task];

    connection.query(query, values, (err, result) => {
      connection.release();

      if (err) return res.status(400).json({ error: "query_error" });
      
      res.send(result);
    });
  });
};

export default postList;
