import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import CS_Class from './cs_class.js';
import Catalog from './cs_class_catelog.js';

// import Student from './student.js';

const catalog = Catalog;
const arr = [];

const app = express();
// app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/cs_classes", (req, res) => {
    res.send(catalog);
    res.send(arr);
});

app.post("/cs_classes", (req, res) => {
    console.log(req);
    catalog.push(req.body.key1);
    catalog.push(new CS_Class(26, "CSCS", "CSCS", 0,));
})

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
});