<?php 
/* config
===================================*/
include "conecta.php";
include "executa.php";
 ?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Controle de Albuns</title>
</head>
<body>
	<section class="tabela-albuns">
		<!-- Criando Albuns  -->
		<div class="create-album">
			<form action="enviar.php" method="POST">
				<input type="text" name="create_album">
				<input type="hidden" name="opcao" value="create_album">
				<input type="submit" value="Create">
			</form>
		</div>
		<!-- /Criando Albuns\  -->
		<!-- Criar um While Puxando o nome de todos os albuns para saber qual alterar  -->

		<?php 
			$select_table=mysql_query("SELECT * FROM nome_albuns");

			while ($row=mysql_fetch_array($select_table)) {
				$id_albuns= $row['ID'];
				$nome_albuns= $row['Album'];
		?>

		<!-- Nome dos Albuns  -->
		<div class="name-albuns">
			<h4><?php echo $nome_albuns; ?></h4>
		</div>
		<!-- /Nome dos Albuns\  -->

		<!-- Editando Nome dos Albuns  -->
		<div class="edit-name-album">
			<form action="enviar.php" method="POST">
				<input type="text" name="edit_name_album">
				<input type="hidden" name="opcao" value="edit_name_album">
				<input type="hidden" name="id_album" value="<?php echo $id_albuns; ?>">
				<input type="submit" value="Edit-name">
			</form>
		</div>
		<!-- /Editando Nome dos Albuns\  -->

		<!-- Adicionando Fotos nos Albuns  -->
		<div class="adic-image-album">
			<form action="enviar.php" method="POST">
				<input type="hidden" name="opcao" value="adic_image_album">
				<input type="hidden" name="id_album" value="<?php echo $id_albuns; ?>">
				<input type="submit" value="Adic-img">
			</form>
		</div>
		<!-- /Adicionando Fotos nos Albuns\  -->

		<!-- Removendo Albuns  -->
		<div class="remove-album">
			<form action="enviar.php" method="POST">
				<input type="hidden" name="opcao" value="remove_album">
				<input type="hidden" name="id_album" value="<?php echo $id_albuns; ?>">
				<input type="submit" value="Remove">
			</form>
		</div>
		<!-- /Removendo Albuns\  -->
<?php } ?>
	</section>
</body>
</html>