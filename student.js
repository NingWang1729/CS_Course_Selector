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
}
