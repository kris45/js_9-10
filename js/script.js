$(document).ready(function () {

    $('select').selectBox({
        mobile: true
    });

    // Checkbox
	$(".niceCheck").mousedown( function() {
    	changeCheck($(this));
    });

	$(".niceCheck").each( function() {  
        changeCheckStart($(this));
    });


    $(".niceCheck").each(
        function() {
            changeCheckStart($(this));
    });


    // Dropdown
	$('.dropdown' ).hover(
        function(){
            $(this).children('.submenu').slideDown(200);
        },
        function(){
        $(this).children('.submenu').slideUp(200);
        }
    );

});


function changeCheck(el) {
    var el = el;
    var input = el.find("input").eq(0);
	    if(el.attr("class").indexOf("niceCheckDisabled")==-1) {   
	        if(!input.attr("checked")) {
			el.css("background-position","0 -17px");	
			input.attr("checked", true)
			} else {
			el.css("background-position","0 0");	
			input.attr("checked", false);
		}
    }   
    return true;
}

function changeCheckStart(el){
	var el = el,
	input = el.find("input").eq(0);
    if(input.attr("checked")) {
		el.css("background-position","0 -17px");	
	} 
    return true;
}











		