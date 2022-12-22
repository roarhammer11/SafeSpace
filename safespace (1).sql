-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 22, 2022 at 04:15 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `safespace`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `accountId` int(11) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `userType` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`accountId`, `userName`, `email`, `password`, `userType`) VALUES
(2, 'Ash151515', 'roarhammer11@gmail.com', '123', 'Mental Health Professional'),
(6, '1', '1@1', '1', 'Not a Mental Health Professional'),
(7, 'test', 'test@test', 'test', 'Mental Health Professional'),
(8, 'agrande', 'agrande@gmail.com', 'agrande', 'Not a Mental Health Professional'),
(9, 'tswift', 'tswift@gmail.com', 'tswift', 'Mental Health Professional'),
(10, 'lanadelray', 'lanadelray@gmail.com', 'lanadelray', 'Not a Mental Health Professional'),
(11, 'ladygaga', 'ladygaga@gmail.com', 'ladygaga', 'Not a Mental Health Professional'),
(12, 'beilish', 'beilish@gmail.com', 'beilish', 'Not a Mental Health Professional'),
(13, 'hannah', 'hbaker@gmail.com', 'hbaker', 'Not a Mental Health Professional'),
(14, 'nnelson', 'nnelson@gmail.com', 'nnelson', 'Not a Mental Health Professional'),
(15, 'cspring', 'cspring@gmail.com', 'cspring', 'Not a Mental Health Professional'),
(16, 'adele', 'adele@gmail.com', 'adele', 'Mental Health Professional'),
(17, 'charlie', 'charlie@gmail.com', 'charlie', 'Not a Mental Health Professional'),
(18, 'nick', 'nick@gmail.com', 'nick', 'Not a Mental Health Professional'),
(19, 'elle', 'elle@gmail.com', 'elle', 'Not a Mental Health Professional'),
(20, 'slay', 'slay@gmail.com', 'slay', 'Not a Mental Health Professional'),
(21, 'yas', 'yas@gmail.com', 'yas', 'Not a Mental Health Professional');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL,
  `accountId` int(11) NOT NULL,
  `message` varchar(500) NOT NULL,
  `image` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `accountId`, `message`, `image`) VALUES
(1, 2, 'testtdaasfdh', NULL),
(2, 6, 'another test', NULL),
(3, 7, 'third test', NULL),
(4, 8, 'hello world', NULL),
(5, 9, 'hiiii', NULL),
(6, 10, 'slay', NULL),
(7, 11, 'last test', NULL),
(8, 12, 'last last teset', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`accountId`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `accountId` (`accountId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `accountId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `fk_accountId` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`accountId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
