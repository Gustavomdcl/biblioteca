<?php
	/* 
	$id – Conexão 
	$sql – Comando SQL 
	$erro – Especifica se a função exibe ou não(0=não, 1=sim)
	$res – Resposta 
	*/ 
	function mysqlexecuta($id,$sql,$erro = 1) { 
		if(empty($sql) OR !($id)) 
		   return 0; //Erro na conexão ou no comando SQL   
	   if (!($res = @mysql_query($sql,$id))) {
		  if($erro) 
			echo "Ocorreu um erro na execução do Comando SQL no banco de dados.";
		  exit;
	   } 
		return $res; 
	 }

?>