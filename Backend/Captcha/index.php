<!DOCTYPE html>
<html lang="pt_BR">
<head>

	<title>Padrão</title>
	<meta charset="utf-8">

	<!-- styles
	======================================================== -->
	<!-- Style -->
	<link rel="stylesheet" href="assets/css/main.css">

</head>

<body>

	<!-- CAPTCHA http://www.devmedia.com.br/captcha-simples-com-php/17444 -->

	<!-- Module
	======================================================== -->
	<div class="l-container cf">

		<!--
		No campo src da tag img abaixo enviaremos 4 parametros via GET
		l = largura da imagem
		a = altura da imagem
		tf = tamanho fonte das letras
		ql = quantidade de letras do captcha
		-->
		<img class="captcha" src="captcha.php?l=150&a=50&tf=20&ql=5">

		<!--
		O texto digitado no campo abaixo sera enviado via POST para
		o arquivo validar.php que ira vereficar se o que voce digitou é igual
		ao que foi gravado na sessao pelo captcha.php
		-->
		<form action="validar.php" name="form" method="post">
		   <input type="text" name="palavra"  /><a class="captcha-refresh">reload</a><br>
		   <input type="submit" value="Validar Captcha" />
		</form>


	</div><!-- .l-container .cf -->

	<!-- javascript
	======================================================== -->
	<!-- jquery jquery.com -->
	<script src="assets/js/jquery.js?v=1.11.0"></script>
	<script>
  $(".captcha-refresh").click(function(){
    $(".captcha").attr('src', 'captcha.php?l=150&a=57&tf=20&ql=5');
  });
  </script>

</body>
</html>