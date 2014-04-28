-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tempo de Geração: 14/04/2014 às 03:40
-- Versão do servidor: 5.6.11
-- Versão do PHP: 5.5.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de dados: `biblioteca_galeria`
--
CREATE DATABASE IF NOT EXISTS `biblioteca_galeria` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `biblioteca_galeria`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `fotos`
--

CREATE TABLE IF NOT EXISTS `fotos` (
  `ID_imagem` int(11) NOT NULL AUTO_INCREMENT,
  `ID_albuns` int(11) NOT NULL,
  `Nome_album` text NOT NULL,
  `Caminho_imagem` text NOT NULL,
  `Nome_imagem` text NOT NULL,
  PRIMARY KEY (`ID_imagem`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

-- --------------------------------------------------------

--
-- Estrutura para tabela `nome_albuns`
--

CREATE TABLE IF NOT EXISTS `nome_albuns` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Album` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=29 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
