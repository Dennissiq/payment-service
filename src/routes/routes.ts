import { Router } from 'express';

const router = Router();

router.get('/payment', (_, response) => {
  return response.json({
    message: 'payment',
  });
});

export { router };
