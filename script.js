$(document).ready(function(){ 	
	$("#open-search-box-button").click(function(){
		if($(this)[0].innerText === 'search') {
			$(this)[0].innerText = 'close';
			$(this).addClass("search-open");
			$(this).removeClass("search-close");
			
			setTimeout(()=>{
				$('#searchbox').removeClass("search-box-hide");
				$('#searchbox').addClass("search-box-show");
			}, 1000)

		} else {
			
				$('#searchbox').removeClass("search-box-show");
				$('#searchbox').addClass("search-box-hide");

			setTimeout(()=>{
				$(this)[0].innerText = 'search';
				$(this).addClass("search-close");
				$(this).removeClass("search-open");
			}, 1000)

		}
	});
});