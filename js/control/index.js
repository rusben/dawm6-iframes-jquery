$(document).ready(function(){
	$("#modifyIframe").click(function() {
		if (isNaN( $("#boxNumber").val())) {
			// Incorrect value.
			$("#boxNumber").addClass("textBoxStyleError").removeClass("textBoxStyle");
		} else {
			// Correct value.
			$("#boxNumber").addClass("textBoxStyle").removeClass("textBoxStyleError");
			
			var divContent = "";
			
			for (var i = 0; i < $("#boxNumber").val(); i++) {
				divContent += '<input type="number" class="box" value="0"></input>';
			}
			divContent += '<button id="addNumber" type="button">Add numbers</button>';
						
			$("#iframe1").contents().find("#content").html(divContent);
		
			// $("#iframe1").contents().find("#content button")
			//		.click(function(){alert("Hi");});
		}
	});
});





