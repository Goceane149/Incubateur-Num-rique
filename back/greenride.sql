-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 03 mai 2023 à 09:55
-- Version du serveur : 8.0.31
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `greenride`
--

-- --------------------------------------------------------

--
-- Structure de la table `alert`
--

DROP TABLE IF EXISTS `alert`;
CREATE TABLE IF NOT EXISTS `alert` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_plaint` int NOT NULL,
  `user_signal` int NOT NULL,
  `trajet` int NOT NULL,
  `date` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `commentaire` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reason` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_17FD46C1EBFABED6` (`user_plaint`),
  UNIQUE KEY `UNIQ_17FD46C1115E8EC8` (`user_signal`),
  KEY `IDX_17FD46C12B5BA98C` (`trajet`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `alert`
--

INSERT INTO `alert` (`id`, `user_plaint`, `user_signal`, `trajet`, `date`, `commentaire`, `reason`) VALUES
(1, 7, 3, 2, '03-05-2023', 'Conducteurs malpoli et insultant', 'Insultes');

-- --------------------------------------------------------

--
-- Structure de la table `car`
--

DROP TABLE IF EXISTS `car`;
CREATE TABLE IF NOT EXISTS `car` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `photos_url` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_user` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_User_ID_car` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `car`
--

INSERT INTO `car` (`id`, `brand`, `model`, `photos_url`, `id_user`) VALUES
(1, 'Bugatti', 'Chiron', '/src/app/assets/img/infos_trajet_test1.jpg,/src/app/assets/img/infos_trajet_test2.jpg,/src/app/assets/img/infos_trajet_test3.jpg,/src/app/assets/img/infos_trajet_test4.jpg,/src/app/assets/img/infos_trajet_test5.jpg,/src/app/assets/img/infos_trajet_test6.jpg,/src/app/assets/img/infos_trajet_test7.jpg', 2),
(2, 'Renault', 'Clio RS', '/src/app/assets/img/clioRS_1.jpg,/src/app/assets/img/clioRS_2.jpg', 3),
(3, 'Renault', 'Twingo', '', 2);

-- --------------------------------------------------------

--
-- Structure de la table `chat`
--

DROP TABLE IF EXISTS `chat`;
CREATE TABLE IF NOT EXISTS `chat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `topic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_user_1` int NOT NULL,
  `id_user_2` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_User_1_ID_chat` (`id_user_1`),
  KEY `FK_User_2_ID_chat` (`id_user_2`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `chat`
--

INSERT INTO `chat` (`id`, `topic`, `date`, `id_user_1`, `id_user_2`) VALUES
(1, '', '19/04/2023', 2, 2);

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rating_user_id_id` int NOT NULL,
  `rated_user_id_id` int NOT NULL,
  `id_user` int NOT NULL,
  `id_trajet` int NOT NULL,
  `rate` int NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_9474526C7D700B4B` (`rating_user_id_id`),
  KEY `IDX_9474526C11B965DB` (`rated_user_id_id`),
  KEY `IDX_9474526C6B3CA4B` (`id_user`),
  KEY `IDX_9474526CD6C1C61` (`id_trajet`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `comment`
--

INSERT INTO `comment` (`id`, `rating_user_id_id`, `rated_user_id_id`, `id_user`, `id_trajet`, `rate`, `content`) VALUES
(1, 2, 7, 2, 7, 5, 'Super conducteur au top !');

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

DROP TABLE IF EXISTS `doctrine_migration_versions`;
CREATE TABLE IF NOT EXISTS `doctrine_migration_versions` (
  `version` varchar(191) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20230320154907', '2023-03-20 15:49:15', 663),
('DoctrineMigrations\\Version20230321104119', '2023-03-21 10:41:29', 450),
('DoctrineMigrations\\Version20230421094510', '2023-04-21 09:46:49', 156);

-- --------------------------------------------------------

--
-- Structure de la table `message_chat`
--

DROP TABLE IF EXISTS `message_chat`;
CREATE TABLE IF NOT EXISTS `message_chat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_user` int NOT NULL,
  `id_chat` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_User_ID_message_chat` (`id_user`),
  KEY `FK_Chat_ID_message_chat` (`id_chat`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `message_chat`
--

INSERT INTO `message_chat` (`id`, `text`, `id_user`, `id_chat`) VALUES
(1, 'Salut', 2, 1),
(2, 'ça marche !!!!', 2, 1),
(3, '', 2, 0);

-- --------------------------------------------------------

--
-- Structure de la table `messenger_messages`
--

DROP TABLE IF EXISTS `messenger_messages`;
CREATE TABLE IF NOT EXISTS `messenger_messages` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `body` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `available_at` datetime NOT NULL,
  `delivered_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  KEY `IDX_75EA56E016BA31DB` (`delivered_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `music`
--

DROP TABLE IF EXISTS `music`;
CREATE TABLE IF NOT EXISTS `music` (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `music`
--

INSERT INTO `music` (`id`, `value`) VALUES
(1, 'Tout'),
(2, 'Rap'),
(3, 'Rock'),
(4, 'Electro'),
(5, 'Pop');

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id`, `value`) VALUES
(1, 'ROLE_ADMIN'),
(2, 'ROLE_USER');

-- --------------------------------------------------------

--
-- Structure de la table `trajet`
--

DROP TABLE IF EXISTS `trajet`;
CREATE TABLE IF NOT EXISTS `trajet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `depart_date` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `depart_hour` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `depart` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `destination` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `etapes` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `places` int NOT NULL,
  `bagages_petits` int NOT NULL,
  `bagages_grands` int NOT NULL,
  `notes` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_account` int NOT NULL,
  `id_car` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_account` (`id_account`),
  KEY `id_car` (`id_car`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `trajet`
--

INSERT INTO `trajet` (`id`, `depart_date`, `depart_hour`, `depart`, `destination`, `etapes`, `places`, `bagages_petits`, `bagages_grands`, `notes`, `id_account`, `id_car`) VALUES
(1, '03-04-2023', '10:02', 'Paris', 'Strasbourg', NULL, 3, 2, 1, 'Aucune', 2, 1),
(2, '02-05-2023', '12:00', 'Marseille', 'Paris', NULL, 3, 2, 2, 'Aucune', 3, 2),
(3, '04-04-2023', '10:30', 'Armentières', 'Hazebrouck', NULL, 2, 3, 4, 'Aucune', 3, 2),
(4, '26-04-2023', '14:00', 'Bruxelles', 'Paris', 'Lille', 4, 2, 2, 'Je voyage avec mon chien', 6, 1),
(5, '02-05-2023', '15:00', 'Hirson', 'Paris', 'Laon', 3, 2, 3, 'Aucune', 6, 2),
(6, '10-05-2023', '10:00', 'Paris', 'Lens', 'Maubeuge', 2, 2, 2, 'Déplacement pour le travail', 2, 1),
(7, '01-05-2023', '15:00', 'Lyon', 'Paris', NULL, 3, 3, 3, 'Animaux autorisés', 7, 1),
(8, '10-05-2023', '14:00', 'Lille', 'Strasbourg', 'Reims', 3, 2, 2, 'Aucun', 7, 1);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(180) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nom` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ville` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cp` int DEFAULT NULL,
  `adresse` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img_profil` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tokens` int NOT NULL,
  `date_naissance` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_music` int NOT NULL,
  `silence` varchar(24) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_unban` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_USER_1` (`id_music`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `nom`, `prenom`, `ville`, `cp`, `adresse`, `img_profil`, `tokens`, `date_naissance`, `id_music`, `silence`, `description`, `date_unban`) VALUES
(1, 'test@test.fr', '[\"ROLE_ADMIN\"]', 'Testpass10!', 'Merlo', 'Florian', 'Armentières', 59280, 'test', '', 50, '20-10/-200', 1, 'true', '', NULL),
(2, 'cedric@gmail.fr', '[\"ROLE_ADMIN\"]', '$2y$13$sTwT/rE1Z1fAB0EJlnoZIeSh23AFL7ym3fA0lEcMWeGBbKrN2c.wG', 'Chimot', 'Cedric', 'Paris', 75000, '10 rue de la Paix', 'https://firebasestorage.googleapis.com/v0/b/greenride-fast-loser2.appspot.com/o/images_profil%2F2019-03-27.jpg?alt=media&token=48b66017-f2bb-4997-9c09-9b5488a6dc2b', 50, '10-10-2000', 3, 'true', '', NULL),
(3, 'toto@gmail.fr', '[\"ROLE_USER\"]', '$2y$13$jd/jxpkNqi7Lbdst0KUe.OeYVu.EGbv3N5zymK69h96Xr85tg/k1u', 'Toto', 'Toto', 'Marseille', 13001, 'Rue des Clowns', 'https://firebasestorage.googleapis.com/v0/b/greenride-fast-loser2.appspot.com/o/images_profil%2F2019-03-27.jpg?alt=media&token=48b66017-f2bb-4997-9c09-9b5488a6dc2b', 50, '01-01-2001', 2, 'true', 'Coucou', '1684313111031'),
(6, 'tintin@gmail.fr', '[\"ROLE_USER\"]', '$2y$13$4Imm3Dzxw9nWKIdA3dcRq.xz7V8Dq4SenrICza3HjYfZ5j9syG6Uq', 'Lebelge', 'Tintin', 'Bruxelles', 12580, '20 rue de la BD', '', 50, '12-12-1956', 4, NULL, '', NULL),
(7, 'blake@gmail.fr', '[\"ROLE_USER\"]', '$2y$13$w5EKmXgDSmwJi1JWtahGwu1uX.9.gwf7HbTHld3Q3XnRXLimXH7LK', 'Blake', 'Francis', 'Londres', 25224, '15 rue des Espions', 'https://firebasestorage.googleapis.com/v0/b/greenride-fast-loser2.appspot.com/o/images_profil%2Fcedric_samus%20avatar.png?alt=media&token=f21aa815-5381-459a-a64b-2ede2d278d72', 50, '14-05-1935', 5, 'false', '', NULL),
(12, 'cedric10@gmail.fr', '[\"ROLE_USER\"]', '$2y$13$lAeEpPqHy89EBM/OLKLHhuf7PoDVX55p5Au62wwm0eqhwx10CPygW', 'Chimot', 'Cédric', 'Paris', 75000, 'rue des Développeurs', 'https://firebasestorage.googleapis.com/v0/b/greenride-fast-loser2.appspot.com/o/images_profil%2F2019-03-27.jpg?alt=media&token=7b7c0e67-3413-4c86-a868-fcfddd7fc4f3', 50, '02-02-2002', 3, 'false', 'Coucou !', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `user_trajet`
--

DROP TABLE IF EXISTS `user_trajet`;
CREATE TABLE IF NOT EXISTS `user_trajet` (
  `id_user` int NOT NULL,
  `id_trajet` int NOT NULL,
  `is_validate` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_user`,`id_trajet`),
  KEY `FK_TrajetID` (`id_trajet`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `alert`
--
ALTER TABLE `alert`
  ADD CONSTRAINT `FK_17FD46C1115E8EC8` FOREIGN KEY (`user_signal`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_17FD46C12B5BA98C` FOREIGN KEY (`trajet`) REFERENCES `trajet` (`id`),
  ADD CONSTRAINT `FK_17FD46C1EBFABED6` FOREIGN KEY (`user_plaint`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `car`
--
ALTER TABLE `car`
  ADD CONSTRAINT `FK_User_ID_car` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `FK_9474526C11B965DB` FOREIGN KEY (`rated_user_id_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_9474526C6B3CA4B` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_9474526C7D700B4B` FOREIGN KEY (`rating_user_id_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_9474526CD6C1C61` FOREIGN KEY (`id_trajet`) REFERENCES `trajet` (`id`);

--
-- Contraintes pour la table `trajet`
--
ALTER TABLE `trajet`
  ADD CONSTRAINT `trajet_ibfk_1` FOREIGN KEY (`id_account`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `trajet_ibfk_2` FOREIGN KEY (`id_car`) REFERENCES `car` (`id`);

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_USER_1` FOREIGN KEY (`id_music`) REFERENCES `music` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
