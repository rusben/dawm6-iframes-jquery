$(document).ready(function(){
	//$("#addNumber").click(function(){ alert("Yes, we click!"); });
});

function addNumbers() {
	// alert("Yes, we click!");
	var total = 0;
	
	$(".box").each(function() {
		total += parseInt($(this).val());
	});
	
	console.log(total);
	window.parent.$("#content").html("The result is: " + total);
}




