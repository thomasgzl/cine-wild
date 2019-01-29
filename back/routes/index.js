import express from 'express';
import connection from '../helpers/db';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

/* GET ALL FILMS */
router.get('/films', (req, res) => {
  connection.query('SELECT * FROM films', (err, result) => {
    res.json(result);
  });
});

/* ADD FILM */
router.post('/film/add', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO films SET ?', formData, (err) => {
    if (err) {
      res.status(500).json({
        flash: err.message
      });
    } else {
      res.status(200).json({
        flash: 'Movie has been added!'
      });
    }
  });
});

/* DELETE A MOVIE */
router.delete('/film/delete/:id', (req, res) => {
  const idMovie = req.params.id;
  connection.query('DELETE FROM films WHERE id = ?', [idMovie], (err) => {
    if (err) {
      res.status(500).json({
        flash: err.message
      });
    } else {
      res.status(200).json({
        flash: 'Movie has been deleted!'
      });
    }
  });
});

/* SELECT FROM ONE CATEGORY */
router.get('/films/:category', (req, res) => {
  const category = req.params.category;
  connection.query('SELECT * FROM films WHERE category = ?', [category], (err, result) => {
    if (err) {
      res.status(500).json({
        flash: err.message
      });
    } else {
      res.json(result);
    }
  });
});

/* SELECT BY NAME */
router.get('/films/name/:name', (req, res) => {
  const name = req.params.name;
  connection.query('SELECT * FROM films WHERE name = ?', [name], (err, result) => {
    if (err) {
      res.status(500).json({
        flash: err.message
      });
    } else {
      res.json(result);
    }
  });
});

/* GET ALL FILMS > 8 */
router.get('/films/rank/top', (req, res) => {
  connection.query('SELECT * FROM films WHERE note >= 8', (err, result) => {
    if (err) {
      res.status(500).json({
        flash: err.message
      });
    } else {
      res.json(result);
    }
  });
});

/* GET RANDOM */
router.get('/film/random', (req, res) => {
  connection.query('SELECT * FROM films ORDER BY RAND() LIMIT 4', (err, result) => {
    if (err) {
      res.status(500).json({
        flash: err.message
      });
    } else {
      res.json(result);
    }
  });
});

export default router;