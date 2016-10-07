var inputs = $('input');
for (var i = 0; i < 10; i++){
	var colors = $(inputs[i]).data("color");
	$(inputs[i]).css("background-color",colors);
}
function ischeck(){
	return $('#modify-texte').is(':checked');
}

$('.color').click(function(){
	var status = ischeck();
	var color = $(this).data("color");
	if (!status){ 
		$("html").css('background-color',color);

	} else {  
  		$('body').css('color',color)
	}
	
});
