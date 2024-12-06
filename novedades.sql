-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 05-12-2024 a las 20:09:13
-- Versión del servidor: 8.0.39
-- Versión de PHP: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mod5leccion2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `subtitulo` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `cuerpo` text COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'International Flower & Garden Festival, lo nuevo de Disney', '13 de marzo de 2023', 'Hasta el 5 de julio, el parque temático «EPCOT», florecerá con innovadores topiarios, además de enriquecer los paladares con sabores exquisitos y deleitar los oídos con conciertos musicales para todas las edades. Una de las novedades será el topiario de Encanto, la película protagonizada por Mirabel, Antonio, Isabela y Luisa. Y otro es el de la […]'),
(2, 'Nuevas actividades en Temaikèn para el fin de semana largo', '17 de febrero de 2023', 'Durante este finde largo de Febrero, Temaikèn propone nuevas actividades para que los visitantes puedan experimentar y disfrutar de la naturaleza durante su visita. Una de ella se llama “Guardianes de la Naturaleza” y permite a familias enteras conocer más íntimamente la fauna y la flora autóctonas y también cómo cuidarlas. El programa se desarrolla […]'),
(3, 'International Flower & Garden Festival, lo nuevo de Disney', '13 de marzo de 2023', 'Hasta el 5 de julio, el parque temático «EPCOT», florecerá con innovadores topiarios, además de enriquecer los paladares con sabores exquisitos y deleitar los oídos con conciertos musicales para todas las edades. Una de las novedades será el topiario de Encanto, la película protagonizada por Mirabel, Antonio, Isabela y Luisa. Y otro es el de la […]'),
(4, 'Nuevas actividades en Temaikèn para el fin de semana largo', '17 de febrero de 2023', 'Durante este finde largo de Febrero, Temaikèn propone nuevas actividades para que los visitantes puedan experimentar y disfrutar de la naturaleza durante su visita. Una de ella se llama “Guardianes de la Naturaleza” y permite a familias enteras conocer más íntimamente la fauna y la flora autóctonas y también cómo cuidarlas. El programa se desarrolla […]');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
