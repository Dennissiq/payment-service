import express from 'express';
import { router } from '../routes/routes';
import 'dotenv/config';

const app = express();

app.use(express.json());

/* v1 API Routes */
app.use('/v1', router);

app.listen(process.env.PORT, () => console.log(`🚚 Server is running on port ${process.env.PORT}`));
