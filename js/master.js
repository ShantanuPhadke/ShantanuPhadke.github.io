
$(document).ready(function() {
    // all custom jQuery will go here
    var enlargeActivated1 = false;
    var toggle = true;

    $("#container1").click(function(){
    	toggler(1);
    	if($(".school-projects-short").css('display')!='none'){
    		$(".school-projects-long").show().siblings('div').hide();
    	}else if($(".school-projects-long").css('display')!='none'){
    		$('.school-projects-short').show().siblings('div').hide();
    	}
    });
    $("#container2").click(function(){
    	toggler(2);
    	if($(".side-projects-short").css('display')!='none'){
    		$(".side-projects-long").show().siblings('div').hide();
    	}else if($(".side-projects-long").css('display')!='none'){
    		$('.side-projects-short').show().siblings('div').hide();
    	}
    });
    /*$("#container3").click(function(){
    	toggler(3);
    });*/
    $("#container4").click(function(){
    	toggler(4);
    	if($(".art-short").css('display')!='none'){
    		$(".art-long").show().siblings('div').hide();
    	}else if($(".art-long").css('display')!='none'){
    		$('.art-short').show().siblings('div').hide();
    	}
    });

    if(toggle){
    	$(".card1").addClass("normal");
    	$(".card1").removeClass("enlarged");
    }else{
    	$(".card1").addClass("enlarged");
    	$(".card1").removeClass("normal");
    }
   
	var containerNumbers = [1,2,3,4];
	function toggler(currentNum) {
		console.log("hahha");
		if(toggle){
			if(currentNum == 1){
				$("#my-work").animate({'height': '1225px'}, 300);
			}else if(currentNum == 2){
				$("#my-work").animate({'height': '600px'}, 300);
			}else{
				$("#my-work").animate({'height': '400px'}, 300);
			}
			var i;
			for(i = 0; i < containerNumbers.length; i++){
				if(containerNumbers[i] != currentNum){
					$("#container"+containerNumbers[i]).animate({'opacity':'0'}, 0);
				}
			}
			if(currentNum != 1){
				$("#container"+currentNum).animate({'position': 'relative', 'left':'4%', 'width':'92%','height':'100%', 'top': '-200px'}, 150);
				$("#container"+currentNum).animate({'top':'-200px'},150);
			}else{
				$("#container"+currentNum).animate({'position': 'relative', 'left': '4%', 'width':'92%','height':'100%'}, 200);
				enlargeActivated1 = true;
			}
			//$("#card"+currentNum).animate({'width':'100%','height':'100%'}, 0);
			$(".front").css("opacity","0");
			$(".back").addClass("no-transformation");
			$(".card1").removeClass('normal');
			$(".card1").addClass('enlarged');
		}else{
			$("#my-work").animate({'height': '250px'}, 300);
			if(currentNum != 1){
				$("#container"+currentNum).animate({'position': 'relative', 'top': '0px', 'left': (currentNum*4)+'%', 'width':'20%','height':'200px'}, 300);
			}else{
				$("#container"+currentNum).animate({'width':'20%','height':'200px', 'position': 'relative', 'left': (currentNum*4)+'%'}, 300);
				enlargeActivated1 = false;
			}
			//$("#card"+currentNum).animate({'width':'100%','height':'100%'}, 0);
			var i;
			for(i = 0; i < containerNumbers.length; i++){
				if(containerNumbers[i] != currentNum){
					$("#container"+containerNumbers[i]).animate({'opacity':'1.0'}, 700);
				}
			}
			$(".back").removeClass("no-transformation");
			$(".card1").addClass('normal');
			$(".card1").removeClass('enlarged');
			$(".front").css("opacity", "1");
		}
		toggle = !toggle;
	}


});

