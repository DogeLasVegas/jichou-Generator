$(function(){
	var h = document.documentElement.clientWidth / 7.2 + 'px';;
	document.documentElement.style.fontSize = h;
	
	//自定义tap
	$(document).on("touchstart", function(e) {
	    if(!$(e.target).hasClass("disable")) $(e.target).data("isMoved", 0);
	});
	$(document).on("touchmove", function(e) {
	    if(!$(e.target).hasClass("disable")) $(e.target).data("isMoved", 1);
	});
	$(document).on("touchend", function(e) {
	    if(!$(e.target).hasClass("disable") && $(e.target).data("isMoved") == 0) $(e.target).trigger("tap");
	});
	
	
})
