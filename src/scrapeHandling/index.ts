import axios from "axios";
import {JSDOM} from 'jsdom';
import { getImageURL, getTitle, getRating } from "./handleData";

export default async function amazonScrapping(key: string){
  const items: Record<string, any>[] = [];
  //'User-Agent': 'axios 10.2.4',
  const response = await axios.get(`https://www.amazon.com.br/s?k=${key}`, {
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0',
      'Accept': '*/*'
    }
  }
  )
    .then((res) => {

      console.log(`Status code from amazon request: ${res.status}`)
      
      const DOM = new JSDOM(res.data)
      
      const results = DOM.window.document.querySelectorAll('[data-component-type="s-search-result"]');
      
      results.forEach((elem: Element)=>{
        const imageURL = getImageURL(elem);
        const title = getTitle(elem);
        const rating = getRating(elem);

        items.push({
          imageURL,
          title,
          rating
        })
      })
      return items;
    })
    .catch((err) => {
      console.log(err);
      console.log('DEU UM ERRO NA REQUISIÇÃO pra AMAZON')
      return null;
    });
    return response;
}