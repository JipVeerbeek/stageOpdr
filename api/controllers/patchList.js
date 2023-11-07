import { pool } from "../connection.js";

const patchList = (req, res) => {
  const id = req.params.id;
  const { checked, task, categorie } = req.body;

  if (id === undefined || (checked === undefined && task === undefined && categorie === undefined)) {
    return res.status(400).json({ error: "Missing parameters" });
  }


  let query = "UPDATE list SET ";
  let values = [];


  if (checked !== undefined) {
    query += "checked = ?, "
    values.push(checked);
  }
  if (task !== undefined) {
    query += "task = ?, ";
    values.push(task);
  }
  if (categorie !== undefined) {
    query += "categorie_id = ?, ";
    values.push(categorie);
  }

  query = query.slice(0, -2)
  query += " WHERE id = ?"
  
  values.push(id)

  pool.getConnection((err, connection) => {
    if (err) return res.status(400).json({ error: "connection_error" });
    // console.log("Query:", query);
    // console.log("Values:", values);
    connection.query(query, values, (err, result) => {
      connection.release();

      if (err) return res.status(400).json({ error: "query_error" });
      
      res.send(result);
    });
  });
};

export default patchList;
