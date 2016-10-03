// function ischeck (){
// 	return $('#modify-texte').is(':checked');
// }

// if (!ischeck()){
// 	console.log('false');

// 	$('input[data-color="#D94A4A"]').css('background-color', '#D94A4A');{
// 		$('input[data-color="#D94A4A"]').click(function(){
// 			$('body').css( "background-color", "#D94A4A");
// 			console.log("teste");

// 		})
// 	}

// 	$('input[data-color="#D09828"]').css('background-color', '#D09828');
// 	$('input[data-color="#D09828"]').click(function(){
// 		$('body').css( "background-color", "#D09828");
// 		console.log("teste");
// 	})

// 	$('input[data-color="#A5DA24"]').css('background-color', '#A5DA24');
// 	$('input[data-color="#A5DA24"]').click(function(){
// 		$('body').css( "background-color", "#A5DA24");
// 		console.log("teste");
// 	})

// 	$('input[data-color="#81CACA"]').css('background-color', '#81CACA');
// 	$('input[data-color="#81CACA"]').click(function(){
// 		$('body').css( "background-color", "#81CACA");
// 		console.log("teste");
// 	})

// 	$('input[data-color="#8B81DD"]').css('background-color', '#8B81DD');
// 	$('input[data-color="#8B81DD"]').click(function(){
// 		$('body').css( "background-color", "#8B81DD");
// 		console.log("teste");
// 	})

// 	$('input[data-color="#C756D6"]').css('background-color', '#C756D6');
// 	$('input[data-color="#C756D6"]').click(function(){
// 		$('body').css( "background-color", "#C756D6");
// 		console.log("teste");
// 	})

// 	$('input[data-color="#BB4BA0"]').css('background-color', '#BB4BA0');
// 	$('input[data-color="#BB4BA0"]').click(function(){
// 		$('body').css( "background-color", "#BB4BA0");
// 		console.log("teste");
// 	})

// 	$('input[data-color="#C6355C"]').css('background-color', '#C6355C');
// 	$('input[data-color="#C6355C"]').click(function(){
// 		$('body').css( "background-color", "#C6355C");
// 		console.log("teste");
// 	})

// 	$('input[data-color="#FFFFFF"]').css('background-color', '#FFFFFF');
// 	$('input[data-color="#FFFFFF"]').click(function(){
// 		$('body').css( "background-color", "#FFFFFF");
// 		console.log("teste");
// 	})

// 	$('input[data-color="#231919"]').css('background-color', '#231919');
// 	$('input[data-color="#231919"]').click(function(){
// 		$('body').css( "background-color", "#231919");
// 		console.log("teste");
// 	})

// }
// else if(ischeck()){

// 	$('#modify-texte').click(function(){

// 		console.log('true')

// 		$('input[data-color="#D94A4A"]').click(function(){
// 			$('.main').css("color","#D94A4A")
// 		});

// 		$('input[data-color="#D09828"]').click(function(){
// 			$('.main').css("color","#D09828") 

// 		});

// 	});

// }


var inputs = $('input');
console.log(inputs);
for (var i = 0; i < 10; i++){
	var colors = $(inputs[i]).data("color");
	console.log(colors)
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


	console.log(typeof ischeck)
});
