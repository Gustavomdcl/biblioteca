<?php
/* config
===================================*/
include "conecta.php";
include "executa.php";

/* Variaveis
===================================*/
if (isset($_POST['opcao'])){$opcao = $_POST['opcao'];}
if (isset($_POST['edit_name_album'])){$edit_name_album = $_POST['edit_name_album'];}
if (isset($_POST['adic_image_album'])){$adic_image_album = $_POST['adic_image_album'];}
if (isset($_POST['remove_album'])){$remove_album = $_POST['remove_album'];}
if (isset($_POST['create_album'])){$create_album = $_POST['create_album'];}
if (isset($_POST['id_album'])){$id_album = $_POST['id_album'];}

/* Condições e Comandos
===================================*/
switch ($opcao) {
	case 'edit_name_album':
		$sql_select_table_name_albuns_edit="SELECT ID, Album FROM nome_albuns WHERE ID='$id_album'";
		$result_select_table_edit = mysql_query($sql_select_table_name_albuns_edit);
		$updt_edit_name_albuns=mysql_query("UPDATE nome_albuns SET Album='$edit_name_album' WHERE ID='$id_album'");
		echo $updt_edit_name_albuns;

		$sql_select_table_fotos_edit="SELECT ID_albuns, Nome_album FROM fotos WHERE ID_albuns='$id_album'";
		$result_select_table_edit = mysql_query($sql_select_table_fotos_edit);
		$updt_edit_fotos=mysql_query("UPDATE fotos SET Nome_album='$edit_name_album' WHERE ID_albuns='$id_album'");
		echo $updt_edit_fotos;

		if ($updt_edit_name_albuns == 1) {
			header('Location: index.php?edit=1');
		}else{
			header('Location: index.php?edit=2');
		}
			//mysql_query()
		//"SELECT nome_albuns.ID, nome_albuns.Album, fotos.ID_albuns, fotos.Nome_album FROM nome_albuns AS nome_albuns INNER JOIN fotos AS fotos";
		break;

	case 'adic_image_album':
		# code...
		break;

	case 'remove_album':
			$sql_remove_album = mysql_query("DELETE FROM nome_albuns WHERE ID='$id_album'");
			$resultado_remove_album = mysql_query($sql_remove_album);

			$select_remove_album_fotos = "SELECT * FROM fotos";
			$resulted_remove_album_fotos = mysql_query($select_remove_album_fotos);

			while ($linha=mysql_fetch_array($resulted_remove_album_fotos)) {
				$id_album_foto = $linha['ID_albuns'];
				if ($id_album === $id_album_foto) {
					$delete = mysql_query("DELETE FROM fotos WHERE ID_albuns='$id_album'");
					$result_remove_album = mysql_query($delete);
				}
			}

			if ($sql_remove_album == 1) {
				header('Location: index.php?del=1');
			}else{
				header('Location: index.php?del=2');
			}
		break;

	case 'create_album':
		$sql_insert_album_name="INSERT INTO nome_albuns(ID, Album) VALUES (NULL,'$create_album')";
		$result_create_album_name=mysql_query($sql_insert_album_name);

		if ($sql_insert_album_name == 1) {
			header('Location: index.php?crt=1');
		}else{
			header('Location: index.php?crt=2');
		}
		break;

}