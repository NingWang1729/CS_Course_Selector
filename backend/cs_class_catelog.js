import express from 'express';
import CS_Class from './cs_class.js';



const Catalog = [
    /* CS_Class: ID, Name, units, professors, pre_reqs, co_reqs, next_classes */
    //CS Classes
    new CS_Class(0, "CS1", 1, [], [], [], []),
    new CS_Class(1, "CS30", 4, [], [], [], []),
    new CS_Class(2, "CS31", 4, [], [], [], []),
    new CS_Class(3, "CS32", 4, [], ["CS31"], [], []),
    new CS_Class(4, "CS33", 5, [], ["CS32"], [], []),
    new CS_Class(5, "CS35L", 3, [], ["CS31"], [], []),
    new CS_Class(6, "M51A", 4, [], [], [], []),
    new CS_Class(7, "CS97", 4, [], ["CS31"], [], []),
    new CS_Class(8, "CS111", 5, [], ["CS32", "CS33", "CS35L"], [], []),
    new CS_Class(9, "CS117", 4, [], [], [], []),
    new CS_Class(10, "CS118", 4, [], ["CS111"], [], []),
    new CS_Class(11, "CS121", 4, [], ["CS32", "STAT100A"], [], []),
    new CS_Class(12, "CS122", 4, [], ["CS32", "STAT100A"], [], []),
    new CS_Class(13, "CS124", 4, [], ["CS32", "M33A", "STAT100A"], [], []),
    new CS_Class(14, "CS130", 4, [], ["CS111", "CS131"], [], []),
    new CS_Class(15, "CS131", 4, [], ["CS33", "CS35L"], [], []),
    new CS_Class(16, "CS132", 4, [], ["CS131"], [], []),
    new CS_Class(17, "CS133", 4, [], ["CS111", "M151B"], [], []),
    new CS_Class(18, "CS134", 4, [], ["CS111", "M151B"], [], []),
    new CS_Class(19, "CS136", 4, [], ["CS118"], [], []),
    new CS_Class(20, "CS137A", 4, [], ["CS131"], [], []),
    new CS_Class(21, "CS137B", 4, [], ["CS137A"], [], []),
    new CS_Class(22, "CS180", 4, [], ["CS32", "M61"], [], []),
    
    //ECE Classes
    new CS_Class(23, "ECE3", 3, [], [], [], []),
    //Math Classes
    new CS_Class(24, "M33A", 4, [], [], [], []),
    new CS_Class(25, "M61", 3, [], [], [], []),
]

// console.log(Catalog);

export default Catalog;