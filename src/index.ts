import express, { Request, Response,NextFunction } from 'express'; 
import {routemgr} from './Routes/routeMgr'

import dotenv from 'dotenv'; // Add this 
dotenv.config(); // And this 

const app = express(); 

const port = process.env.PORT || 3000; 

app.use('/',routemgr);

app.get('/', (req: Request, res: Response) => { 
  res.send('Hello there!'); 
}); 


app.use((err: Error, req: Request, res: Response, _next : NextFunction) => { 
  console.error(err.stack); 
  res.status(500).send('Something went wrong'); 
}); 

app.listen(port, () => { 
  console.log('Server running at http://localhost:${port}'); 
});