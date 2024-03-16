import express from 'express';
import cors from 'cors';
import path from 'path';
import { PORT, company_name } from './config.js';

import mockdataRouter from './mockdata.js';


const app = express();
// Enable CORS for specific origin
app.use(cors({
//   origin: "https://example.com"
}));

// Parse request body and extended the size to 1mb

app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));

// GET route
app.get("/", (req, res) => {
  let data = {};
  data["GET"] = req.query;
  res.send(data);
});

// POST route
app.post("/", (req, res) => {
  console.log("POST request received");
  let data={};
   data['POST'] = req.body;
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
