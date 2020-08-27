class CS_Class {
	id;
	name;
	credit;
	units;
	major;
    professors;
    pre_requisites;
    co_requisites;
    next_classes;

    constructor(id, name, credit, units, major, professors, pre_requisites, co_requisites, next_classes) {
	this.id = id;
	this.name = name;
	this.credit = credit;
	this.units = units;
	this.major = major;
	this.professors = professors;
	this.pre_requisites = pre_requisites;
	this.co_requisites = co_requisites;
	this.next_classes = next_classes;
    }

	get_id() {
		return this.id;
	}

    get_name() {
	return this.name;
    }

    get_units() {
	return this.units;
    }

    get_professors() {
	return this.professors;
    }

    get_pre_requisites() {
	return this.pre_requisites;
    }

    get_co_requisites() {
	return this.co_requisites;
    }

    get_next_classes() {
	return this.next_classes;
    }

    completed_all_pre_requisites(completed_classes) {
	for (var i = 0; i <this.pre_requisites.length(); i++) {
	    var completed = false;
	    for (var j = 0; j < completed_classes.length(); j++) {
		if (completed_classes[j] === this.pre_requisites[i]) {
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

    get_incomplete_pre_requisites(completed_classes) {
	var todo = [];
	if (this.completed_all_pre_requisites(completed_classes)) {
	    return todo;
	}
	
	for (var i = 0; i <this.pre_requisites.length(); i++) {
	    var completed = false;
	    for (var j = 0; j < completed_classes.length(); j++) {
		if (completed_classes[j] === this.pre_requisites[i]) {
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

export default CS_Class;