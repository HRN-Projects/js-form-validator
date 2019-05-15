<form action='https://harshnatu.convstaging.com/index.php?option=com_validator' method='post' id='the-form'>
	<table class='table-blue'>
		<tr>
			<td>
				<label for='pan'>PAN Number</label>
				<input type="text" name="pancard" id='pan' class='input-box' placeholder="PAN Card Number">
			</td>
		</tr>
		<tr>
			<td>
				<label for='aadc'>Aadhar Number</label>
				<input type="number" name="aadhar" id='aadc' placeholder="Aadhar Card Number">
			</td>
		</tr>
		<tr>
			<td>
				<label for='mob'>Mobile Number</label>
				<input type="number" name="mobile" id='mob' placeholder="Mobile Number">
			</td>
		</tr>
	</table>
	<button class='btn btn-success validateBtn' type='button'>Validate</button>
</form>

<script type="text/javascript">
	jQuery(document).ready(function(){

/*		$('#pan').attr(required:'required');
		$('#aadc').attr(required:'required');
		$('#mob').attr(required:'required');
*/

		function validator(pan, aadc, mob)
		{
			var panlen = (''+pan).length;
			var aadlen = (''+aadc).length;
			var moblen = (''+mob).length;

			var panOK = 0;
			var aadOK = 0;
			var mobOK = 0;

			if(pan=="")
			{
				alert('PAN Number field cannot be empty!');
			}
			else if(panlen != 10)
			{
				alert('PAN Number should of length : 10');
			}
			else
			{
				var panRegex = /^([A-Z]{5})([0-9]{4})([A-Z]{1})$/;

				if(pan.search(panRegex) == -1)
				{
					alert('Pan number is invalid. Please enter pan number in format : XXXXX0000X');
				}
				else
				{
					panOK = 1;
				}
			}

			if(aadc=="")
			{
				alert('Aadhar Number field cannot be empty!');
			}
			else if(isNaN(aadc))
			{
				alert('Aadhar number should be numeric.');
			}
			else if(aadlen != 12)
			{
				alert('Aadhar number should be of length : 12.');
			}
			else
			{
				aadOK = 1;
			}


			if(mob=="")
			{
				alert('Mobile number field cannot be empty!');
			}
			else if(isNaN(mob))
			{
				alert('Mobile number should be numeric.');
			}
			else if(moblen != 10)
			{
				alert('Mobile number should be of length : 10.');
			}
			else
			{
				var mobRegex = /^([7|8|9]{1})([0-9]{9})$/;
				if(mob.search(mobRegex) == -1)
				{
					alert('Mobile number should always start from \'7\', \'8\' or \'9\'');
				}
				else
				{
					mobOK = 1;
				}
			}

			if((panOK == 1) && (aadOK == 1) && (mobOK == 1))
			{
				panOK = 0;
				aadOK = 0;
				mobOK = 0;

				return(alert('Form successfully validated...'));
			}
		}


	    jQuery(document).on('click','.validateBtn', function(e){
	    	
	    	var pan = jQuery('#pan').val().trim();
	    	var aadhar = jQuery('#aadc').val().trim();
	    	var mobile = jQuery('#mob').val().trim();

	    	validator(pan, aadhar, mobile);
	    });
	


	});
</script>
