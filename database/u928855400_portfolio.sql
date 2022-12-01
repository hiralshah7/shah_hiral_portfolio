-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 01, 2022 at 09:18 PM
-- Server version: 10.6.10-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u928855400_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `db_portfolio`
--

CREATE TABLE `db_portfolio` (
  `id` int(11) NOT NULL,
  `name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `technology_used` varchar(400) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Role` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `images` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Description` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_portfolio`
--

INSERT INTO `db_portfolio` (`id`, `name`, `technology_used`, `Role`, `images`, `Description`) VALUES
(1, 'Brand Building', 'Adobe Xd, HTML5, CSS, Js, Adobe Illustrator', 'Designer', 'brand_building.png', 'The goal of this assignment is to create a comprehensive brand identity for a new product with the given group and the brand overall design and theme should be visually appealing to the user end side.'),
(2, 'Music Mixer', 'Adobe Xd, HTML5, CSS, Js, Photoshop', 'Designer', 'music_mixer.png', 'We were asked to make a game where you could take different sounds and put them together to make a song.The goal of this assignment was to create a interface in which user can mix two or more music an'),
(5, 'Sports Intro', 'Cinema 4D, AfterEffects', 'Designer', 'sports_intro.png', 'We were asked to create a video intro that could be used for a sports network. All the modelling, texturing, and animation was done using Cinema 4d.\"'),
(7, 'Branding For Startup', 'HTML5, CSS, Js', 'Developer', 'startup_branding.png', 'In this project We were asked to Create Branding of a startup from scratch, So We were in team of four, In that I was doing overall Development of the site and rest of the branding like wireframe, inf');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `db_portfolio`
--
ALTER TABLE `db_portfolio`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `db_portfolio`
--
ALTER TABLE `db_portfolio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
