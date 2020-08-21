import express from 'express';
import data from './data';
import CS_Class from './cs_class.js';
// import Student from './student.js';

const cs1 = new CS_Class("CS1", 1, [], [], [], []);

const app = express();

app.get("/cs_classes", (req, res) => {
    res.send(data.products);
    // res.send(cs1.get_name());
})

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
});