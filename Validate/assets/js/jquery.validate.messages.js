$(document).ready(function() {
		// validate the comment form when it is submitted
		//$("#commentForm").validate();
		//reject defaults for IE placeholder fix
		jQuery.validator.addMethod("defaultInvalid", function(value, element) {
		switch (element.value) {

			case "name": 
				if (element.name == "name") return false;
			break;
			
			case "email": 
				if (element.name == "email") return false;
			break;

			case "message": 
				if (element.name == "message") return false;
			break;

			default: return true;
			break;
		} 
		}); 

		// validate signup form on keyup and submit
		$("#contactForm").validate({
			rules: {
				name: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true
				},
			},
			messages: {
				name: "Por favor preencha seu Nome",
				email: "Por favor preencha um email válido",
				message: "Por favor preencha com sua mensagem",
			}
		});

		$("#newsletterForm").validate({
			rules: {
				email: {
					required: true,
					email: true
				},
			},
			messages: {
				email: "Por favor preencha um email válido",
			}
		});

		$("#adminForm").validate({
			rules: {
				email: {
					required: true,
					email: true
				},
			},
			messages: {
				usuario: "Por favor preencha com seu usuario",
				senha: "Por favor preencha com sua senha",
			}
		});

	});
	  //placeholders in IE
    // $('input').placeholder();