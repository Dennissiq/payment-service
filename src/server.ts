import express from 'express';
import { router } from './routes/routes';

const PORT = 1337;

const app = express();

app.use(express.json());

app.use('/v1', router);

app.get('/test', (_, response) => {
  return response.json({
    message: 'test',
  });
});

app.listen(PORT, () => console.log(`🚚 %c Server is running on port ${PORT}, background: #222`));
