import { pool } from "../connection.js";

const getBeers = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.status(400).json({ error: 'connection_error' });
      return;
    }

    const query = "SELECT name, breweries.brewery_name as brewery_name, type, rating from beers JOIN breweries ON beers.brewery_id=breweries.id";

    connection.query(query, (err, rows) => {
      connection.release();

      if (err) {
        res.status(400).json({ error: 'query_error' });
        return;
      } else {
        res.json(rows);
        // console.log(rows)
      }
    });
  });
};

 export default getBeers;