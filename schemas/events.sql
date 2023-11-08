-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 08, 2023 at 06:40 AM
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
(42, 'asdfa', 'adfsdf', '5645454', 'adsfasdf', 564454, 'asdfsdf', 'Bahia', 'dsfsdf', '2023-11-24T05:26', 54545454, 'img_1699421042229.png', 38),
(43, 'sadfasdf', 'sdfasdfasd', '1445455', 'asdfasdf', 445454, 'asdfsdf', 'Bahia', 'asdfsdf', '2023-12-06T05:39', 56455445, 'img_1699421800360.jpg', 38),
(44, 'Evento ', 'Evento legal divertido interessante kkkkkkkkkkkkkkkkkkkkkkkkkk', '45454', 'adsfasdf', 1656, 'asdfsdf', 'Amazonas', 'afsdfsdfsdf', '2023-11-11T05:40', 65565655, 'img_1699421854274.png', 38);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

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
