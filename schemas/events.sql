-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2023 at 03:02 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bonna-party`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `cep` varchar(20) NOT NULL,
  `street` varchar(255) NOT NULL,
  `number` int(100) NOT NULL,
  `hood` varchar(255) NOT NULL,
  `state` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `date` varchar(255) NOT NULL,
  `mobile` int(100) NOT NULL,
  `image_path` varchar(500) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `name`, `description`, `cep`, `street`, `number`, `hood`, `state`, `city`, `date`, `mobile`, `image_path`, `user_id`) VALUES
(45, 'Festa na Chácara', ' Uma festa ao ar livre em uma chácara encantadora, com música ao vivo, churrasco, jogos e diversão para todas as idades. Venha desfrutar de um dia repleto de atividades emocionantes e boa companhia em um ambiente tranquilo e natural.', '12345-678', ' Rua das Flores', 123, 'Jardim Primavera', 'Goiás', 'Cidade Feliz', '2023-11-28T02:40', 0, 'img_1700617124332.png', 40),
(46, 'Festa do Caio', 'A festa do Caio é um evento imperdível para celebrar seu aniversário! Venha se divertir com música ao vivo, DJ, petiscos deliciosos e muita animação. Será uma noite cheia de surpresas e boas vibrações.', ': 54321-098', 'Avenida das Estrelas', 456, 'Vila Nova', 'Paraíba', 'Cidade Alegria', '2023-11-29T02:45', 0, 'img_1700617293945.png', 40),
(47, 'Revoada do Ig', ' A \"Revoada do Ig\" é um evento dedicado aos amantes de observação de pássaros. Junte-se a nós para uma experiência única de observação de aves migratórias. Guiados por especialistas, exploraremos a diversidade de espécies que passam pela região durante a ', '76543-210', 'Travessa das Águias', 789, 'Área Verde', 'Rio Grande do Norte', 'Cidade Aviária', '2023-11-29T01:46', 0, 'img_1700617400643.png', 40),
(48, 'Aniversário Dezoitão', ' O \"Aniversário Dezoitão\" é uma celebração para marcar os 18 anos com muita alegria! Uma festa animada com música, dança, comida deliciosa e surpresas especiais para comemorar essa data tão importante na vida do aniversariante.', '23456-789', 'Rua dos Sonhos', 1234, 'Centro Feliz', 'Rio de Janeiro', 'Cidade Radiante', '2023-11-24T19:58', 0, 'img_1700617968206.png', 40),
(49, 'Pool Party', 'A \"Pool Party\" é um evento refrescante cheio de diversão à beira da piscina. Venha se refrescar e aproveitar um dia incrível com música, jogos aquáticos, bebidas geladas e boa companhia. É a oportunidade perfeita para relaxar e se divertir ao sol!', '34567-890', 'Avenida das Ondas', 5678, 'Beira-Mar', 'Roraima', 'Cidade Solarenga', '2023-12-13T03:00', 0, 'img_1700618161008.png', 40),
(50, 'Social Reveillon', 'O \"Social Reveillon\" é uma celebração especial de Ano Novo para receber o próximo ano com estilo e alegria. Um evento sofisticado com música ao vivo, buffet gourmet, brindes à meia-noite e uma atmosfera elegante para saudar o novo ano em grande estilo.', '67890-123', 'Rua das Estrelas Cadentes', 9876, ' Alto Luxo', 'Pernambuco', 'Cidade Festiva', '2023-12-07T02:03', 0, 'img_1700618346166.png', 40);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `register` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
