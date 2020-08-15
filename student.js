class Student {

    #name;
    #completed_classes;
    #current_classes;
    #planned_classes;
    
    
    constructor(name, completed_classes, current_classes, planned_classes) {
	this.#name = name;
	this.#completed_classes = completed_classes;
	this.#current_classes = current_classes;
	this.#planned_classes = planned_classes;
    }

    get_name() {
	return this.#name;
    }

    get_completed_classes() {
	return this.#completed_classes;
    }

    get_current_classes() {
	return this.#current_classes;
    }

    get_planned_classes() {
	return this.#planned_classes;
    }

    add_class(new_class) {
	if (this.#completed_classes.indexOf(new_class) == -1) {
	    this.#completed_classes.push(new_class);
	    return true;
	} else {
	    return false;
	}
    }

    add_classes(new_classes) {
	var ineligible = [];
	for (int i = 0; i < new_classes.length(); i++) {
	    if (!add_class(new_classes[i])) {
		ineligible.push(new_classes[i]);
	    }
	}
	return ineligible;
    }
}
