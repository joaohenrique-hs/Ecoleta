import express, {Router} from 'express'

const routes = express.Router();

routes.get('/', (request, respose) => {
  console.log('Received');
  return respose.json({ message: "Hello World!" });
});

export default routes;
