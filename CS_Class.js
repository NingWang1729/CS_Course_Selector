const logger = require('./logger');

function CS_Class (name, units, professors, pre_requisites, co_requisites) {
    this.name = name;
    this.units = units;
    this.professors = professors;
    this.pre_requisites = pre_requisites;
    this.co_requisites = co_requisites;
    
    function has_pre_requisites(completed_classes) {
	for (var i = 0; i <this.pre_requisites.length(); i++) {
	    var completed = false;
	    for (var j = 0; j < completed_classes.length(); j++) {
		if (completed_classes[j] == this.pre_requisites[i]) {
		    completed = true;
		}
	    }
	    if (!completed) {
		return false;
	    }
	}
	return true;
    }
};

var cs1 = new CS_Class("CS1", 1, [], [], []);

logger.log(cs1.name);
