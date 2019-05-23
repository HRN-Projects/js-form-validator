<form action='#' method='post' id='the-form'>
	<table>
		<tr>
			<td>
				<label for='pan'>PAN Number<sup style='color: red; font-size: 18px;'>*</sup></label>
			</td>
			<td>
				<input type="text" name="pancard" id='pan' class='input-box' placeholder="PAN Card Number">
			</td>
		</tr>
		<tr>
			<td>
				<label for='aadc'>Aadhar Number<sup style='color: red; font-size: 18px;'>*</sup></label>
			</td>
			<td>
				<input type="number" name="aadhar" id='aadc' placeholder="Aadhar Card Number">
			</td>
		</tr>
		<tr>
			<td>
				<label for='mob'>Mobile Number<sup style='color: red; font-size: 18px;'>*</sup></label>
			</td>
			<td>
				<input type="number" name="mobile" id='mob' placeholder="Mobile Number">
			</td>
		</tr>
	</table>
	<button class='btn btn-success validateBtn' type='button'>Validate</button>
</form>

<br/>
<div class='error-area'>
	<ul class='errors-ul'>
		
	</ul>
</div>

<!-- JS starts here -->
<script type="text/javascript">
	jQuery(document).ready(function(){
		
		/* Function to initialize the value of 'errors' as blank */
		function init_err()
		{
			errors = '';
		}
		
		/*
		** Function to validate three fields from the form - PAN card Number, Aadhar Card Number, Mobile Number
		**
		** @params pan
		**	PAN card number input in form.
		** 
		** @params aadc
		**	Aadhar card number input in form.
		**
		** @params mob
		**	Mobile number input in form.
		**
		** return - Success msg as an alert box.
		*/
		function validator(pan, aadc, mob)
		{
			var panlen = (''+pan).length;		// Count length of pan number input.
			var aadlen = (''+aadc).length;		// Count length of aadhar number input.
			var moblen = (''+mob).length;		// Count length of mobile number input.

			var panOK = 0;				// Success flag for pan number input.
			var aadOK = 0;				// Success flag for aadhar number input.
			var mobOK = 0;				// Success flag for mobile number input.

			init_err();
			
			// Validation checks for PAN card number input
			if(pan=="")	// Check if input is blank.
			{
				jQuery('#pan').focus();
				jQuery('#pan').css("border", "1px solid red");				
				jQuery("[class^='pan-']").remove();
				errors += '<li class="pan-emp">PAN Number field cannot be empty!</li>';
				jQuery('.errors-ul').append(errors);
				init_err();
			}
			else if(panlen != 10)	// Check if length of PAN card input is equal to 10 or not.
			{
				jQuery('#pan').focus();
				jQuery('#pan').css("border", "1px solid red");
				jQuery("[class^='pan-']").remove();
				errors += '<li class="pan-len">PAN Number should of length : 10</li>';
				jQuery('.errors-ul').append(errors);
				init_err();
			}
			else
			{
				// Regex to check pattern / format of PAN number input.
				var panRegex = /^([A-Z]{5})([0-9]{4})([A-Z]{1})$/;

				if(pan.search(panRegex) == -1)	// Check if regex pattern is matching in input string.
				{
					jQuery('#pan').focus();
					jQuery('#pan').css("border", "1px solid red");
					jQuery("[class^='pan-']").remove();
					errors += '<li class="pan-format">PAN number is invalid. Please enter pan number in format : XXXXX0000X</li>';
					jQuery('.errors-ul').append(errors);
					init_err();
				}
				else
				{
					jQuery("[class^='pan-']").remove();
					jQuery('#pan').css("border", "1px solid lime");
					panOK = 1;
				}
			}
			
			
			// Validation checks for Aadhar card number input
			if(aadc=="")	// Check if input is blank.
			{
				jQuery('#aadc').focus();
				jQuery('#aadc').css("border", "1px solid red");
				jQuery("[class^='aad-']").remove();
				errors += '<li class="aad-emp">Aadhar Number field cannot be empty!</li>';
				jQuery('.errors-ul').append(errors);
				init_err();
			}
			else if(isNaN(aadc)) // Check if Aadhar card input is numeric.
			{
				jQuery('#aadc').focus();
				jQuery('#aadc').css("border", "1px solid red");
				jQuery("[class^='aad-']").remove();
				errors += '<li class="aad-num">Aadhar number should be numeric.</li>';
				jQuery('.errors-ul').append(errors);
				init_err();
			}
			else if(aadlen != 12)	// Check if length of Aadhar card input is equal to 10 or not.
			{
				jQuery('#aadc').focus();
				jQuery('#aadc').css("border", "1px solid red");
				jQuery("[class^='aad-']").remove();
				errors += '<li class="aad-len">Aadhar number should be of length : 12.</li>';
				jQuery('.errors-ul').append(errors);
				init_err();
			}
			else
			{
				jQuery("[class^='aad-']").remove();
				jQuery('#aadc').css("border", "1px solid lime");
				aadOK = 1;
			}

			
			// Validation checks for mobile number input
			if(mob=="")	// Check if input is blank.
			{
				jQuery('#mob').focus();
				jQuery('#mob').css("border", "1px solid red");
				jQuery("[class^='mob-']").remove();
				errors += '<li class="mob-emp">Mobile number field cannot be empty!</li>';
				jQuery('.errors-ul').append(errors);
				init_err();
			}
			else if(isNaN(mob))	// Check if mobile number input is numeric.
			{
				jQuery('#mob').focus();
				jQuery('#mob').css("border", "1px solid red");
				jQuery("[class^='mob-']").remove();
				errors += '<li class="mob-num">Mobile number should be numeric.</li>';
				jQuery('.errors-ul').append(errors);
				init_err();
			}
			else if(moblen != 10)	// Check if length of mobile number input is equal to 10 or not.
			{
				jQuery('#mob').focus();
				jQuery('#mob').css("border", "1px solid red");
				jQuery("[class^='mob-']").remove();
				errors += '<li class="mob-len">Mobile number should be of length : 10.</li>';
				jQuery('.errors-ul').append(errors);
				init_err();
			}
			else
			{
				// Regex to check pattern / format of mobile number input.
				var mobRegex = /^([7|8|9]{1})([0-9]{9})$/;
				
				if(mob.search(mobRegex) == -1)	// Check if regex pattern is matching in input string.
				{
					jQuery('#mob').focus();
					jQuery('#mob').css("border", "1px solid red");
					jQuery("[class^='mob-']").remove();
					errors += '<li class="mob-format">Mobile number should always start from \'7\', \'8\' or \'9\'</li>';
					jQuery('.errors-ul').append(errors);
					init_err();
				}
				else
				{
					jQuery("[class^='mob-']").remove();
					jQuery('#mob').css("border", "1px solid lime");
					mobOK = 1;
				}
			}

			if((panOK == 1) && (aadOK == 1) && (mobOK == 1))	// If all the flags are '1' i.e. successful.
			{
				// Initialize flags to '0'
				panOK = 0;	
				aadOK = 0;
				mobOK = 0;

				// empty all the error list items (li) tags within the '.errors-ul' class.
				jQuery('.errors-ul').empty();

				return(alert('Form successfully validated...'));	// Trigger a success alert box.
			}
		}

		
	    /* "click" event handling for form's submit button */
	    jQuery(document).on('click','.validateBtn', function(e){
	    	
		//Processing the input by cleaning the strings and trim all the leading and trailing 'blankspaces'. 
	    	var pan = jQuery('#pan').val().trim();
	    	var aadhar = jQuery('#aadc').val().trim();
	    	var mobile = jQuery('#mob').val().trim();
	
		// Call to 'validator' function
	    	validator(pan, aadhar, mobile);
	    });

	});
</script>
