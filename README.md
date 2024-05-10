# Amazon Web Scrapping

libaries and tools:
- axios
- JSDOM
- typescript
- node-cache
- cors
- nodemon
- express

## Front End

There is just one html file (index.html), that imports a javascript to front-end (script.js). Whithin the js file, two event listeners are set, and they are will make a request to the api by AXIOS (when the search bar is active). When the request is made a loading message is displayed, if there was an error a message "Something went wrong. Please try again later." is displayed.

## Back End

Uma API que o scrapping na webpage amazon.com.br, listando os produtos da primeira página de uma pesquisa feita para uma keyword específica.

An API for scrapping to webpage amazon.com.br, that lists the products from the first page of search results for a given keyword.

### Endpoints

GET: /api/scrape?key=${key}

### Middlewares

There is just one middleware for caching the GET request

### Controllers

A controller to handle the /api/scrape route. It also access the function in scrapHandling/index.js

### scrapHandling

Contains functions to scrapping data from Amazon and handling data in JSDOM


## How to test

The package manager NPM is necessary to test this project

1 - Make a fork of this repository

2 - Install dependencies

```bash
npm i
```

3 - Run the API

```bash
npm run start
```

4 - Run Vite in a new terminal

```bash
npm run dev
```
