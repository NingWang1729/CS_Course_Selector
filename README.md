
CS_Class
//Private Variables
-name : String
-units : Number
-professors : String[] 
-pre_requisites : CS_Class[]
-co_requisites : CS_Class[]
-next_classes : CS_Class[]   
//Constructors
+constructor(name, units, professors, pre_requisites, co_requisites, next_classes)

// Getters
+get_name() : String
+get_units() : Number
+get_professors() : String[]
+get_pre_requisites() : CS_Class[]
+get_co_requisites() : CS_Class[]
+get_next_classes() : CS_Class[]

//Setters

//Class Methods
+completed_all_pre_requisites(completed_classes : CS_Class[]) : Boolean
+get_incomplete_pre_requisites(completed_classes : CS_Class[]) : CS_Class[]





Student
//Private Variables
-name : String
-completed_classes : CS_Class[]
-current_classes : CS_Class[]
-planned_classes : CS_Class[]
//Constructors
+constructor(name, completed_classes, current_classes, planned_classes)

//Getters
+get_name() : String
+get_completed_classes() : String[]
+get_current_classes() : String[]
+get_planned_classes() : String[]

//Class methods
+add_completed_class(completed_class : String) : Boolean
+add_completed_classes(completed_classes : String[]) : String[]
+remove_completed_class(completed_class : String) : Boolean
+remove_ccompleted_lasses(completed_classes : String[]) : String[]

+add_class(current_class : String) : Boolean
+add_classes(current_classes : String[]) : String[]
+remove_class(current_class : String) : Boolean
+remove_classes(current_classes : String[]) : String[]

+add_class_to_plan(planned_class : String) : Boolean
+add_classes_to_plan(planned_classes : String[]) : String[]
+remove_class_from_plan(planned_class : String) : Boolean
+remove_classes_from_plan(planned_classes : String[]) : String[]

+finish_class(finished_class : String) : Boolean
+finish_classes(finished_classes : String[]) : String[]

+verify_class(new_class :String) : Boolean
+verify_classes(new_classes : String[]) : String[]
