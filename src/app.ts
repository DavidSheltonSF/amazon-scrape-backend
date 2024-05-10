import express from 'express';
import router from './router';



const app = express();
const port = 7000;

const cors = require('cors');
app.use(cors({
  credentials: true,
  origin: "*",
  method: "GET,HEAD,PUT,PATCH,POST,DELETE"
}))

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}/api/`)
})

app.use('/api', router());