<?php
if (!isset($_POST))
    die("N&atilde;o recebi nenhum par&acitc;metro. Por favor volte ao formulario.html antes");
if (eregi('tempsite.ws$|locaweb.com.br$|hospedagemdesites.ws$|websiteseguro.com$', $_SERVER[HTTP_HOST])) {
    $emailsender = 'email@email.com.br'; // /!\ ALTERAR /!\
} else {
    $emailsender = "webmaster@" . $_SERVER[HTTP_HOST];
}

if(PHP_OS == "Linux") $quebra_linha = "\n";
elseif(PHP_OS == "WINNT") $quebra_linha = "\r\n"; 
else die("Este script nao esta preparado para funcionar com o sistema operacional de seu servidor");

$nomeremetente     = isset($_POST['name']) ? $_POST['name'] : null;
$emailremetente    = "email@email.com.br"; // /!\ ALTERAR /!\
$emaildestinatario = "gustavo.lima@grupomint.com.br"; // /!\ ALTERAR /!\
$comcopia          = "email@email.com.br"; // /!\ ALTERAR /!\
$comcopiaoculta    = "email@email.com.br"; // /!\ ALTERAR /!\
$email			   		 = $_POST['email'];
$negocio           = $_POST['business'];
$assunto 					 = $_POST['subject'];
$mensagem          = $_POST['message'];

if (isset($_POST['message'])) {
  $mensagemHTML = utf8_decode('<p>Nome: ' . $nomeremetente . '</p>
	<p>Email: ' . $email . '</p>>
	<p>Negocio: ' . $negocio . '</p>
	<p>Assunto: ' . $assunto . '</p>
	<p>Mensagem: ' . $mensagem . '</p>
	<hr>');
} else {
   $mensagemHTML = " $email ";
}

$headers = "MIME-Version: 1.1".$quebra_linha;
$headers .= "Content-type: text/html; charset=iso-8859-1".$quebra_linha;

$headers .= "From: ".$emailsender.$quebra_linha;
$headers .= "Return-Path: " . $emailsender . $quebra_linha;

if(strlen($comcopia) > 0) $headers .= "Cc: ".$comcopia.$quebra_linha;
if(strlen($comcopiaoculta) > 0) $headers .= "Bcc: ".$comcopiaoculta.$quebra_linha;
$headers .= "Reply-To: ".$emailremetente.$quebra_linha;

$resultado = mail($emaildestinatario, $assunto, $mensagemHTML, $headers, "-r" . $emailsender);

if ($resultado == 1) {
	header('Location: /!\ URL /!\ /index.php?suc=1'); // /!\ ALTERAR /!\ INSERIR LINK
}
else {
	header('Location: /!\ URL /!\ /index.php?suc=2'); // /!\ ALTERAR /!\ INSERIR LINK
}
?>