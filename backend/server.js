import express from 'express';
import CS_Class from './cs_class.js';
import Catalog from './cs_class_catelog.js';

// import Student from './student.js';

const catalog = Catalog;

const app = express();

app.get("/cs_classes", (req, res) => {
    res.send(catalog);
});

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
});