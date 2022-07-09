import { Router } from 'express';

const routes = Router();

routes.get('/users', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'David',
    },
  ]);
});

routes.post('/users', (req, res) => {
  res.json(req.body);
});

export default routes;
