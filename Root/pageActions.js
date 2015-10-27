var O = function(id){
	return document.getElementById(id);
}

var changeView = function(){
	if(O("main_view").icon == "today"){
		//Load today page
		O("main_view").icon = "list";
		O("main_title").innerHTML = "Today";
		O("list").show = "today";
		O("container_head").innerHTML = "<span flex>Today</span><paper-progress></paper-progress>";
	} else {
		//load outlook page
		O("main_view").icon = "today";
		O("main_title").innerHTML = "All Tasks";
		O("list").show = "all";
		O("container_head").innerHTML = "";
	}
}

var createTask = function(){
	O("createDialog").heading = "Create Task";
	O("taskItem").value = "";
	O("taskDate").value = "";
	O("prgDialog").selected = "required";
	O("createDialog").toggle();
}

var acceptEdits = function(){
	var item = O("taskItem").value;
	var date = O("taskDate").value;
	var priority = O("prgDialog").selected;
	O("list").acceptEdit(item, date, priority);
}

window.onload = function(){
	O("main_view").onclick = changeView;
	O("add_task").onclick = createTask;
}