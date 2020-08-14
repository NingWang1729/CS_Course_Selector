const logger = require('./logger');

function CS_Class (name, units, professors, pre_requisites, co_requisites, next_classes) {
    this.#name = name;
    this.#units = units;
    this.#professors = professors;
    this.#pre_requisites = pre_requisites;
    this.#co_requisites = co_requisites;
    this.#next_classes = next_classes;
    
    get_name() {
	return this.#name;
    }

    get_units() {
	return this.#units;
    }

    get_professors() {
	return this.#professors;
    }

    get_pre_requisites() {
	return this.#pre_requisites;
    }

    get_co_requisites() {
	return this.#co_requisites;
    }

    get_next_classes() {
	return this.#next_classes;
    }

    function completed_all_pre_requisites(completed_classes) {
	for (var i = 0; i <this.pre_requisites.length(); i++) {
	    var completed = false;
	    for (var j = 0; j < completed_classes.length(); j++) {
		if (completed_classes[j] == this.pre_requisites[i]) {
		    completed = true;
		    break;
		}
	    }
	    if (!completed) {
		return false;
	    }
	}
	return true;
    }

    function get_incomplete_pre_requisites(completed_classes) {
	var todo = [];
	if (completed_pre_requisites(completed_classes)) {
	    return todo;
	}
	
	for (var i = 0; i <this.pre_requisites.length(); i++) {
	    var completed = false;
	    for (var j = 0; j < completed_classes.length(); j++) {
		if (completed_classes[j] == this.pre_requisites[i]) {
		    completed = true;
		    break;
		}
	    }
	    if (!completed) {
		todo.append(this.pre_requisites[i]);
	    }
	}
	return todo;
    }
};

var cs1 = new CS_Class("CS1", 1, [], [], [], []);

logger.log(cs1.get_name());
