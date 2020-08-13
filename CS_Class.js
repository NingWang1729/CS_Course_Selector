const logger = require('./logger');

function CS_Class (name, units, professors, pre_requisites, co_requisites) {
    this.name = name;
    this.units = units;
    this.professors = professors;
    this.pre_requisites = pre_requisites;
    this.co_requisites = co_requisites;
};

var cs1 = new CS_Class("CS1", 1, [], [], []);

logger.log(cs1.name);
