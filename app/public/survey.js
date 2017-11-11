  	// Chosen CSS
    var config = {
      '.chosen-select'           : {},
      '.chosen-select-deselect'  : {allow_single_deselect:true},
      '.chosen-select-no-single' : {disable_search_threshold:10},
      '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
      '.chosen-select-width'     : {width:"95%"}
    }
    alert("survey.js")
    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }

    // Capture inputs and valiate form
    $("#submit").on("click", function(){
    	function validateForm() {
		  var isValid = true;
		  $('.form-control').each(function() {
		    if ($(this).val() === '')
		        isValid = false;
		  });
		  $('.chosen-select').each(function() {
		  	if($(this).val() === "")
		  		isValid = false
		  })
		  return isValid;
		}

		// If all create user data object
		if (validateForm() == true) {
	    	var friendData = {
	    		name: $("#name").val(),
	    		imageUrl: $("#imageUrl").val(),
	    		scores: [
	    		$("#q1").val(), 
	    		$("#q2").val(), 
	    		$("#q3").val(), 
	    		$("#q4").val(), 
	    		$("#q5").val(), 
	    		$("#q6").val(), 
	    		$("#q7").val(), 
	    		$("#q8").val(), 
	    		$("#q9").val(), 
	    		$("#q10").val(), 
	    		]
	    	}
	    	var currentURL = window.location.origin;
	    	// Post data to friends route. 
	    	$.post(currentURL + "/api/friends", friendData, function(data){
	    		// Grab the result from the AJAX post so that the best match's name and imageUrl are displayed.
	    		$("#matchName").text(data.name);
	    		$('#matchImg').attr("src", data.imageUrl);
		    	// Show best friend 
		    	$("#resultsModal").modal('toggle');
	    	});
		}
		else {
			alert("Some fields missing. Please fill complete form to continue!");
		}
    	return false;
    });