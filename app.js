
$(document).ready(function () {


	$('#usercheck').hide();
	let usernameError = true;
	$('#usernames').keyup(function () {
		validateUsername();
	});

	function validateUsername() {
	let usernameValue = $('#usernames').val();
  let regex = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
	if (usernameValue.length == '') {
	$('#usercheck').show();
		usernameError = false;
		return false;
	}
	else if((usernameValue.length < 3)||
			(usernameValue.length > 20)) {
		$('#usercheck').show();
		$('#usercheck').html
("**length of name must be between 3 and 20");
		usernameError = false;
		return false;
	}
  else if(regex.test(usernameValue)){
    $('#usercheck').hide();
  }
  else if(! (regex.test(usernameValue))){
    $('#usercheck').hide();
    $('#usercheck').show();
		$('#usercheck').html
("!! Invalid name");
		usernameError = false;
		return false;
  }
	else {
		$('#usercheck').show();
		$('#usercheck').html("UserName");
		$('#usercheck').css("color", "green");
	}
	}

	const number =
		document.getElementById('number');
	number.addEventListener('blur', ()=>{
	let regex =
/^([_\-\.0-9]){10}$/;
	let n = number.value;
	if(regex.test(n)){
		number.classList.remove(
				'is-invalid');
		numberError = true;
		}
		else{
			number.classList.add(
				'is-invalid');
			numberError = false;
		}
	})

	const email =
		document.getElementById('email');
	email.addEventListener('blur', ()=>{
	let regex =
/^([_\-\.0-9a-zA-Z]+)@([_\-\.a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
	let s = email.value;
	if(regex.test(s)){
		email.classList.remove(
				'is-invalid');
		emailError = true;
		}
		else{
			email.classList.add(
				'is-invalid');
			emailError = false;
		}
	})


	$('#passcheck').hide();
	let passwordError = true;
	$('#password').keyup(function () {
		validatePassword();
	});
	function validatePassword() {
		let passwordValue =
			$('#password').val();
			let regex = /^(?=.*\d)(?=(.*\W){2})(?=.*[A-Z])(?=.*[a-z])(?!.*\s).{1,15}$/ ;
		if (passwordValue.length == '') {
			$('#passcheck').show();
			passwordError = false;
			return false;
		}
		if ((passwordValue.length < 8)||
			(passwordValue.length > 20)) {
			$('#passcheck').show();
			$('#passcheck').html
("!! length of your password must be between 8 and 20");
			$('#passcheck').css("color", "red");
			passwordError = false;
			return false;
		}
		else if(!regex.test(passwordValue)){
			$('#passcheck').show();
			$('#passcheck').html
("!! Password Criteria dosent matched");
			$('#passcheck').css("color", "red");
			passwordError = false;
			return false;
			}
		 else {
			$('#passcheck').hide();
		}
	}


	$('#conpasscheck').hide();
	let confirmPasswordError = true;
	$('#conpassword').keyup(function () {
		validateConfirmPassword();
	});
	function validateConfirmPassword() {
		let confirmPasswordValue =
			$('#conpassword').val();
		let passwordValue =
			$('#password').val();
		if (passwordValue != confirmPasswordValue) {
			$('#conpasscheck').show();
			$('#conpasscheck').html("X");
			$('#conpasscheck').css("color", "red");
			confirmPasswordError = false;
			return false;
		}
		else {
			$('#conpasscheck').show();
			$('#conpasscheck').html("🗸");
			$('#conpasscheck').css("color", "green");
		}
	}
	$('#submitbtn').click(function () {
		validateUsername();
		validatePassword();
		validateConfirmPassword();
		validateEmail();
		if ((usernameError == true) &&
			(passwordError == true) &&
			(confirmPasswordError == true) &&
			(emailError == true)) {
			return true;
		} else {
			return false;
		}
	});
	$(".animation").mouseover(function(){
   $(this).animate({
                      height:'200px',
                      width:'200px',
                      left : '-11px'
                    })
                            });

$(".animation").mouseout(function(){
   $(this).animate({
                      height:'178px',
                      width:'178px',
                      left : '0px'
                    })
                            });
});
