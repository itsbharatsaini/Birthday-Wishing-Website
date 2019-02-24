$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function()
		{
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		var audio = $('.song')[0];
        audio.play();

		$('.background').fadeIn('slow');
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
	

		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$('.design1').fadeIn('slow');
		$('.design2').fadeIn('slow');
		$('.design3').fadeIn('slow');
		$('.design4').fadeIn('slow');
		$('.1st_msg').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
		$('#story').fadeIn('slow');

		});
	});


	$('#story').click(function(){
		
		$('.1st_msg').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('very-slow').delay(750).promise().done(function(){
				i=i+1;
				$("p:nth-child("+i+")").fadeIn('slow').delay(4000);
				if(i==42){
				$("p:nth-child(40)").fadeOut('slow').promise().done(function () {
					$('.surprise').fadeIn('fast');
					});
				
				}
				else{
				msgLoop(i);
				}			

		});
		}
		
		msgLoop(0);
        
	   $(this).fadeOut('slow').delay(229222).promise().done(function(){
			$('.surprise_msg').fadeIn('slow').delay(3100);
			$('#surprise').fadeIn('very-slow');
		});	
	
    });
    $('#surprise').click(function(){
		$('.surprise_msg').fadeOut('fast');
		$('.balloon-border').animate({top:250},8000);
		$('.bannar').addClass('bannar-come');
		$('.display_name').fadeIn('slow').delay(1000);
		$(this).fadeOut('fast').promise().done(function(){
		$('#cake_coming').fadeIn('very-slow');
		});
	});
	});  
