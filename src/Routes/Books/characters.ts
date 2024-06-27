// routes/defaultRoute.ts
import { Router } from 'express';

export const charactersRoute = Router();

charactersRoute.get('/:charName', (req, res) => {

    const name = req.params.charName;
    console.log(name)
    var data={
        name: 'Not Found',
        age: -1,
        alias: ["null"]
    }
    if(name==='Aragorn'){
        data = {
            name: 'Aragorn',
            age: 210,
            alias: ['trancos','elessar','Thorongil']
                  
          };
    }
    
      res.json(data);
});

charactersRoute.get('/', (req, res) => {

 
        const data = {
            name: 'Frodo Baggings',
            age: 53,
            alias: ['El loco Bolsón','Amigo de los elfos','Nuevededos', 'portador del anillo']
                  
          };
    
    
      res.json(data);
    
    });