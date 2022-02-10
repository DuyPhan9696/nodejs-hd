-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 10, 2022 at 06:15 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs-hd`
--

-- --------------------------------------------------------

--
-- Table structure for table `nodejs-htn`
--

CREATE TABLE `nodejs-htn` (
  `id` int(11) NOT NULL,
  `lat` double(9,6) NOT NULL,
  `lot` double(9,6) NOT NULL,
  `name` varchar(255) NOT NULL,
  `emptySpace` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `nodejs-htn`
--

INSERT INTO `nodejs-htn` (`id`, `lat`, `lot`, `name`, `emptySpace`) VALUES
(1, 21.000510, 105.815751, 'Royal City, Thượng Đình, Thanh Xuân, Hà Nội', 10),
(2, 21.006948, 105.838712, 'Phương Mai, Đống Đa, Hà Nội', 20),
(3, 20.999304, 105.845083, 'Đồng Tâm, Hai Bà Trưng, Hà Nội', 40);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `nodejs-htn`
--
ALTER TABLE `nodejs-htn`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `nodejs-htn`
--
ALTER TABLE `nodejs-htn`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
