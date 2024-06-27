import { Router } from "express";

export const tvshowRoute=Router();

tvshowRoute.get('/', (req, res) => {
    const data = {
        name: 'Game of Thrones S1',
        saga: 'Game Of Thrones',
        Author: 'Benioff, David'
      };
      res.json(data);
});