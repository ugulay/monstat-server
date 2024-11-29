import { Router } from 'express';
const routes = Router();

routes.get('/foo', (req, res, next) => res.json({ foo: 'bar' }));

export default routes;