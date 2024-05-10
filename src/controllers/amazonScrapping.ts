import {Request, Response} from 'express';

import scrapeHandling from '../scrapeHandling';


export const amazonScrappingController = async (req: Request, res: Response) => {
  try {
    const {key} = req.query;

    console.log(key)

    const response = await scrapeHandling(String(key));

    if (!response){
      console.log('No response');
      return res.sendStatus(400);
    }

    res.status(200).json(response);
    
  } catch(err){
    console.log(err);
    res.sendStatus(400);

  }

}