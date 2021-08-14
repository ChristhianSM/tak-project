-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-08-2021 a las 20:12:18
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `clientes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `leads`
--

CREATE TABLE `leads` (
  `ID` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `telefono` varchar(12) NOT NULL,
  `mensaje` mediumtext NOT NULL,
  `temas` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `leads`
--

INSERT INTO `leads` (`ID`, `nombre`, `email`, `telefono`, `mensaje`, `temas`) VALUES
(1, 'dfgd', 'dfgg@eddddd.com', '12312321321', 'ddddd', '[Análisis y Estrategia de Comunicación Digital],[Diseño y creacion de Contenido]'),
(2, 'jkadsfasjd', 'eeeee@fajfa.com', '3424524526', 'kladjflaj  lasdlfja  kaldfjla afjljf ', '[Gestion de Redes Sociales],[Diseño y creacion de Contenido]'),
(6, 'QQQQQ WWWWW', 'qqqq@www.qw', '45262626', 'Esto es una prueba', '[Gestion de Redes Sociales]'),
(8, 'JJJJJ AAAAA', 'jjj@aaaa.la', '458929626', '', '[Análisis y Estrategia de Comunicación Digital],[Diseño y creacion de Contenido],[Asesoramiento]'),
(9, 'HHHHH', 'hhh@adfaf.zx', '563733737', 'Esto es una prueba del cliente HHHHH', '[Gestion de Redes Sociales],[Diseño y creacion de Contenido]'),
(10, 'KKKKK LLLL', 'kkk@lllll.kl', '45363646734', '', '[Análisis y Estrategia de Comunicación Digital],[Gestion de Redes Sociales],[Diseño y creacion de Contenido]'),
(11, 'AAAAA BBBBB', 'aaaa@bbbb.ab', '2426226252', '', '[Gestion de Redes Sociales],[Asesoramiento]'),
(12, 'PPPP MMMMM', 'pppp@afjafjaf.al', '635637373', 'dfjalkjag  aklfjlaj f lkafjalkfja', '[Análisis y Estrategia de Comunicación Digital],[Gestion de Redes Sociales]'),
(13, 'Hola Mundo', 'hola@mundo.php', '925825820582', '', '[Análisis y Estrategia de Comunicación Digital],[Gestion de Redes Sociales],[Diseño y creacion de Contenido],[Publictemadad en Redes Sociales],[Asesoramiento]'),
(14, 'adadfaddf', 'adas@fadgaa.qw', '3446635673', 'Esto es una consulta', '[Análisis y Estrategia de Comunicación Digital]');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `leads`
--
ALTER TABLE `leads`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `leads`
--
ALTER TABLE `leads`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
