import { pool } from "../connection.js";

const getList = (req, res) => {
  const id = req.params.id;
  const categoryId = req.query.category;
  console.log(categoryId)
  let query = "SELECT list.id, task, categorieen.categorie, checked FROM list INNER JOIN categorieen ON list.categorie_id = categorieen.id";
  if (id) {
    query += " WHERE list.id = ?";
  } 
  else if(categoryId > 0) {
    query += " WHERE list.categorie_id = ?";
  }
  else if(categoryId === 0) { }
  const params = [id || categoryId];
  
  pool.getConnection((err, connection) => {
    if (err) {
      res.status(400).json({ error: "connection_error" });
      return;
    }
    
    connection.query(query, params, (err, rows) => {
      // console.log(query, params)
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
