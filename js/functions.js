$(function() {
	workBelt();	
}); 

function workBelt() {
	//Thumnails items and details items MUST follow the same order and must be one of each
	$(".detail").hide();
	$(".thumbnail").click(function(event){	
		$(this).parent().parent().parent().animate({left:"-100%"});
		$element_clicked = $(".thumbnail").index(this) + 2; // We have to add 2 because in workwrap we have 2 extra childs (the arrow and the svg)
		$(".detail:nth-child("+$element_clicked+")").show();
		$(".thumbnail").hide();		
	});
	$("#arrow").click(function(event){
		$(this).parent().parent().parent().animate({left:"0%"});
		$(".detail").hide();
		$(".thumbnail").show();
	});
}