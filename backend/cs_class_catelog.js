import express from 'express';
import CS_Class from './cs_class.js';



const Catalog = [
    /* CS_Class: ID, Name, units, professors, pre_reqs, co_reqs, next_classes */
    new CS_Class(0, "CS1", 1, [], [], [], []),
    new CS_Class(1, "CS31", 4, [], [], [], []),
    new CS_Class(2, "CS32", 4, [], ["CS31"], [], [])
    // ["CS1", 1, [], [], [], []],
    // ["CS31", 1, [], [], [], []]
]

// console.log(Catalog);

export default Catalog;