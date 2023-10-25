-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2023 at 02:40 AM
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
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `name`, `email`, `password`) VALUES
(31, 'jao', 'gabrielvelozodev@gmail.com', '$2y$10$uuPskqPpqG.Mo/YynVG0Tu0Xidv40P08CC7Lcq6ZkITkVJtj2zWWO'),
(32, 'carlos', 'carlinhos@gmail.com', '$2y$10$GPOCXOVxKxwBSXFOWgCK7.ixdbXyT0zSRi25VVfCU52WX4yBlnSpO'),
(33, 'BielGostoso', 'gaygay@gay.com', '$2y$10$81BA9kWCqZlP7ptvNkbMJO4cgKuMl7ceJEwEw/iEb1QsmGuyp/pgK'),
(34, 'bielzin', 'gabriel@gmail.com', '$2y$10$CMRAHD2C5rwdRAM1WOedQ.AGR2CY0Pq26dEsN43U3Q0wkn1G5zf5q'),
(35, 'biel', 'jedi@gmail.com', '$2y$10$2vjMHvJgSAGjvsSnuPtBcuiSWcDCIWk8OecYMP5UqGa37Vl1rtYz.'),
(36, 'Biel', 'biel@gmail.com', '$2y$10$Jnu628c9FHNAEd.c5fsCheEoIpYZHXWkDqy1Xs2lwRWlChwJdig4W');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
