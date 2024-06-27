// routes/defaultRoute.ts
import { Router } from 'express';

export const booksRoute = Router();

booksRoute.get('/', (req, res) => {
    const data = {
        name: 'The Fellowhip of the Ring',
        saga: 'The Lord Of the Rings',
        Author: 'Tolkien, JRR'
      };
      res.json(data);
});