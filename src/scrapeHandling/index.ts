import axios from "axios";
import {JSDOM} from 'jsdom';
import { getImageURL, getTitle, getRating } from "./handleData";

export default async function amazonScrapping(key: string){
  const items: Record<string, any>[] = [];

  const response = await axios.get(`https://www.amazon.com.br/s?k=${key}`, {
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'axios 10.2.4',
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
      return null;
    });
    return response;
}