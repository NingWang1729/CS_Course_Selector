import express from 'express';
import CS_Class from './cs_class.js';



const Catalog = [
    new CS_Class("CS1", 1, [], [], [], []),
    new CS_Class("CS31", 4, [], [], [], []),
    new CS_Class("CS32", 4, [], ["CS31"], [], [])
    // ["CS1", 1, [], [], [], []],
    // ["CS31", 1, [], [], [], []]
]

// console.log(Catalog);

export default Catalog;