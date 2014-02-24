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

	<!-- Module
	======================================================== -->
	<div class="l-container cf">
		<h1>Contato</h1>
		<?php
     $sucesso = isset($_GET['suc']) ? $_GET['suc'] : null;
     if($sucesso==1) {
        echo '<p>As informações foram encaminhadas com sucesso e em breve daremos um retorno!</p>';
     }else if($sucesso==2){
        echo '<p>As informações não foram encaminhadas!</p>';
     }
    ?>
		<form id="contactForm" method="post" action="enviar.php">
      <fieldset>
        <label for="name">Nome *</label>
        <input type="text" name="name" id="name" placeholder="Nome:" required /><br />

        <label for="email">Email *</label>
        <input type="text" name="email" id="email" placeholder="Email:" required /><br />

				<label for="business">Negócio</label>
        <input type="text" name="business" id="business" placeholder="Negócio:" /><br />

        <label for="subject">Assunto</label>
        <input type="text" name="subject" id="subject" placeholder="Assunto:" /><br />

        <label for="message">Mensagem *</label>
        <textarea name="message" id="message" placeholder="Mensagem:" maxlength="300" onkeyup="countChar(this)" required ></textarea><br />
        <label for="message">Caracteres disponíveis: <span class="char-count">300</span></label><br />

        <button type="submit">Enviar</button>
      </fieldset>
    </form>
	</div><!-- .l-container .cf -->

	<!-- javascript
	======================================================== -->
	<!-- jquery jquery.com -->
	<script src="assets/js/jquery.js?v=1.11.0"></script>
	<!-- jquery validate -->
	<script src="assets/js/jquery.validate.js"></script>
	<script src="assets/js/jquery.placeholder.js"></script><!-- depois de todos os códigos javascript -->
	<script src="assets/js/jquery.validate.messages.js"></script>
	<!-- Contador Textarea -->
  <script>
    function countChar(val) {
      var len = val.value.length;
      if (len > 300) {
        val.value = val.value.substring(0, 300);
      } else {
        $('.char-count').text(300 - len);
      }
    };
  </script>

</body>
</html>