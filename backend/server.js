import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import CS_Class from './cs_class.js';
import Catalog from './cs_class_catelog.js';
import Student from './student.js'

// import Student from './student.js';

const student = [[], [], [], [], [], []];
const catalog = Catalog;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/cs_classes", (req, res) => {
    res.send(catalog);
});

app.get("/students", (req, res) => {
    res.send(student);
})

app.post("/cs_classes", (req, res) => {
    console.log(req);
})

app.post("/students", (req, res) => {
    console.log(req);
    student[0] = req.body.completed_classes;
    student[1] = req.body.current_classes;
    student[2] = req.body.planned_classes;
    student[3] = req.body.completed_class_credit;
    student[4] = req.body.current_class_credit;
    student[5] = req.body.planned_class_credit;
})

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
});