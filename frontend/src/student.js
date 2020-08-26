class Student {
    name;
    completed_classes;
    current_classes;
    planned_classes;
    
    constructor(name, completed_classes, current_classes, planned_classes) {
	this.name = name;
	this.completed_classes = completed_classes;
	this.current_classes = current_classes;
	this.planned_classes = planned_classes;
    }

    get_name() {
	return this.name;
    }

    get_completed_classes() {
	return this.completed_classes;
    }

    get_current_classes() {
	return this.current_classes;
    }

    get_planned_classes() {
	return this.planned_classes;
    }

	is_scheduled(class_name) {
		return this.completed_classes.indexOf(class_name) !== -1
				|| this.current_classes.indexOf(class_name) !== -1
				|| this.planned_classes.indexOf(class_name) !== -1;
	}

	is_completed(class_name) {
		return this.completed_classes.indexOf(class_name) !== -1;
	}

	is_current(class_name) {
		return this.current_classes.indexOf(class_name) !== -1;
	}

	is_planned(class_name) {
		return this.planned_classes.indexOf(class_name) !== -1;
	}
    add_completed_class(completed_class) {
	if (this.completed_classes.indexOf(completed_class) === -1) {
	    this.completed_classes.push(completed_class);
	    return true;
	} else {
	    return false;
	}
    }

    add_completed_classes(completed_classes) {
	var ineligible = [];
	for (var i = 0; i < completed_classes.length(); i++) {
	    if (!this.add_completed_class(completed_classes[i])) {
		ineligible.push(completed_classes[i]);
	    }
	}
	return ineligible;
    }

    remove_completed_class(completed_class) {
	var index = this.completed_classes.indexOf(completed_class);
	if (index !== -1) {
	    this.completed_classes.splice(index, 1);
	    return true;
	} else {
	    return false;
	}
    }

    remove_completed_classes(completed_classes) {
	var ineligible = [];
	for (var i = 0; i < completed_classes.length(); i++) {
	    if (!this.remove_completed_class(completed_classes[i])) {
		ineligible.push(completed_classes[i]);
	    }
	}
	return ineligible;
    }

    add_class(current_class) {
	if (this.current_classes.indexOf(current_class) === -1) {
	    this.current_classes.push(current_class);
	    return true;
	} else {
	    return false;
	}
    }
    
    add_classes(current_classes) {
	var ineligible = [];
	for (var i = 0; i < current_classes.length(); i++) {
	    if (!this.add_class(current_classes[i])) {
		ineligible.push(current_classes[i]);
	    }
	}
	return ineligible;
    }

    remove_class(current_class) {
	var index = this.current_classes.indexOf(current_class);
	if (index !== -1) {
	    this.current_classes.splice(index, 1);
	    return true;
	} else {
	    return false;
	}
    }

    remove_classes(current_classes) {
	var ineligible = [];
	for (var i = 0; i < current_classes.length(); i++) {
	    if (!this.remove_class(current_classes[i])) {
		ineligible.push(current_classes[i]);
	    }
	}
	return ineligible;
    }

    add_class_to_plan(planned_class) {
	if (this.planned_classes.indexOf(planned_class) === -1) {
	    this.planned_classes.push(planned_class);
	    return true;
	} else {
	    return false;
	}
    }

    add_classes_to_plan(planned_classes) {
	var ineligible = [];
	for (var i = 0; i < planned_classes.length(); i++) {
	    if (!this.add_class_to_plan(planned_classes[i])) {
		ineligible.push(planned_classes[i]);
	    }
	}
	return ineligible;
    }

    remove_class_from_plan(planned_class) {
	var index = this.planned_classes.indexOf(planned_class);
	if (index !== -1) {
	    this.planned_classes.splice(index, 1);
	    return true;
	} else {
	    return false;
	}
    }

    remove_classes_from_plan(planned_classes) {
	var ineligible = [];
	for (var i = 0; i < planned_classes.length(); i++) {
	    if (!this.remove_class_from_plan(planned_classes[i])) {
		ineligible.push(planned_classes[i]);
	    }
	}
	return ineligible;
    }

    finish_class(finished_class) {
	if (this.current_classes.indexOf(finished_class) !== -1) {
	    if (this.completed_classes.indexOf(finished_class) === -1) {
		this.completed_classes.concat(this.current_classes.splice(this.current_classes.indexOf(finished_class), 1));
		return true;
	    } else {
		return false;
	    }
	} else {
	    return false;
	}
    }
	
    finish_classes(finished_classes) {
	var ineligible = [];
	for (var i = 0; i < finished_classes.length(); i++) {
	    if (!this.finish_class(finished_classes[i])) {
		ineligible.push(finished_classes[i]);
	    }
	}
	return ineligible;
    }
}

export default Student;