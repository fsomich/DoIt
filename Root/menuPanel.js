var $ = function(id){
	return document.getElementById(id);
}

var changeView = function(){
	$("main_view").icon = "today";
}

window.onload = function(){
	$("main_view").onclick = changeView;
}