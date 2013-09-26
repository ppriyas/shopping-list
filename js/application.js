$(document).ready(function() {
	
	jQuery.fn.exists = function(){return this.length>0;}
	
	$(".add").click(function (event) {
		event.preventDefault();					
		var inputitem = $('#newitem').val();		
		if (inputitem == '')
		{			
			var empty_item = confirm("Item is empty, do you want to add an empty item?");
			if (empty_item)
			{
				$("ul").append("<li><input type='checkbox' class='singlecheck'/>Item<br/><button class='remove'>Delete Item</button></li>");
			}
		}
		else
		{			
			$("ul").append("<li><input type='checkbox' class='singlecheck'/>"+inputitem+"<br/><button class='remove'>Delete Item</button></li>");
			$('#newitem').val("");
		}
		
		$(".checkout").show();
	});

	$('#shopping-items').on('click', '.remove', function(){ 
		$(this).closest("li").remove();
	});	

	$('#shopping-items').on('click', '.checkout', function(){ 
		event.preventDefault();	
		$("button").prop('disabled',true);
		$("li").css("text-decoration","line-through");
		$(".singlecheck").prop('checked', true);
		$("li").find("img").remove();	
		$("#shopping-items li").append("<img class='tickmark' src='images/check-mark.jpg' alt='checked out'/>");		
		$(this).text('All Checked Out');
	});		 
	
	$('#shopping-items').on('change','.singlecheck', function() {		
		if ($(this).is(':checked'))
		{			
			$(this).closest("li").find("img").remove();	
			$(this).closest("li").append("<img class='tickmark' src='images/check-mark.jpg' alt='checked out'/>");	
			$(".checkout").text('Checkout');
			$("button").prop('disabled',false);
			$(this).closest('li').find("button").prop('disabled',true);
			$(this).closest('li').css("text-decoration","line-through");
		}
		else
		{
			console.log("not checked");
			$(this).closest("li").find("img").remove();			
			$(".checkout").text('Checkout');		
			$(".checkout").prop('disabled',false);
			$(".add").prop('disabled',false);
			$(this).closest("li").find("button").prop('disabled',false);
			$(this).closest('li').css("text-decoration","none");
		}	
	});	
	
	
});