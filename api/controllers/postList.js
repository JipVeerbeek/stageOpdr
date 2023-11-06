import { pool } from "../connection.js";

const postList = (req, res) => {
  const task = req.body.task;
  const categorie = req.body.categorie_id;
  console.log(categorie)
  if (task === "") {
    return res.status(400).json({ error: "Task is empty" });
  }

  pool.getConnection((err, connection) => {
    if (err) return res.status(400).json({ error: "connection_error" });

    const query = "INSERT INTO `list` (`task`, `categorie_id`) VALUES (?, ?)";
    const values = [task, categorie];

    connection.query(query, values, (err, result) => {
      connection.release();

      if (err) return res.status(400).json({ error: "query_error" });
      
      res.send(result);
      console.log(result)
    });
  });
};

export default postList;
