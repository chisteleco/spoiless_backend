
import { Router } from 'express';

export const chapterRoute = Router();

chapterRoute.get('/:idChapter', (req, res) => {
    const idChapter = req.params.idChapter ;
   
    let data;
    if(idChapter==='3'){
     data = {
        characters: ['Aragorn', 'Legolas','Gimli'],
        sumamry: 'Aragorn, Legolas y Gimli van a cazar orcos',
        Localtion: ['Rohan','Edoras']
      };
    }
      res.json(data);
});

chapterRoute.get('/', (req, res) => {
   
  
    const data = {
        characters: ['Frodo', 'Samwise','Gandalf'],
        sumamry: 'Gandalf le cuenta a Frodo la leyenda del anillo único mientras Sam corta el cesped en el jardín, escuchando la conversación de fondo',
        Localtion: ['Hobbiton','The shire']
      };
    
      res.json(data);
});