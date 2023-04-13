-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mer. 05 avr. 2023 à 12:18
-- Version du serveur : 5.7.36
-- Version de PHP : 8.1.0

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
-- Structure de la table `car`
--

CREATE TABLE `car` (
  `id` int(11) NOT NULL,
  `brand` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photos_url` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `car`
--

INSERT INTO `car` (`id`, `brand`, `model`, `photos_url`, `id_user`) VALUES
(1, 'Bugatti', 'Chiron', '/src/app/assets/img/infos_trajet_test1.jpg,/src/app/assets/img/infos_trajet_test2.jpg,/src/app/assets/img/infos_trajet_test3.jpg,/src/app/assets/img/infos_trajet_test4.jpg,/src/app/assets/img/infos_trajet_test5.jpg,/src/app/assets/img/infos_trajet_test6.jpg,/src/app/assets/img/infos_trajet_test7.jpg', 2),
(2, 'Renault', 'Clio RS', '/src/app/assets/img/clioRS_1.jpg,/src/app/assets/img/clioRS_2.jpg', 3);

-- --------------------------------------------------------

--
-- Structure de la table `chat`
--

CREATE TABLE `chat` (
  `id` int(11) NOT NULL,
  `topic` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `id_user_1` int(11) NOT NULL,
  `id_user_2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `text` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `is_anonymized` tinyint(1) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_trajet` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `comment`
--

INSERT INTO `comment` (`id`, `text`, `rating`, `date`, `is_anonymized`, `id_user`, `id_trajet`) VALUES
(1, 'Génial ce conducteur', 5, '2023-04-04 11:56:52', 0, 1, 1),
(2, 'Pas ouf ce conducteur', 1, '2023-04-04 11:56:52', 1, 2, 1),
(3, 'Très bon conducteur mais il n\'as pas décrocher un mot', 3, '2023-04-05 09:59:03', 0, 4, 1);

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20230320154907', '2023-03-20 15:49:15', 663),
('DoctrineMigrations\\Version20230321104119', '2023-03-21 10:41:29', 450);

-- --------------------------------------------------------

--
-- Structure de la table `message_chat`
--

CREATE TABLE `message_chat` (
  `id` int(11) NOT NULL,
  `text` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_chat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `music`
--

CREATE TABLE `music` (
  `id` int(11) NOT NULL,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id`, `value`) VALUES
(1, 'ROLE_ADMIN'),
(2, 'ROLE_USER');

-- --------------------------------------------------------

--
-- Structure de la table `tastes`
--

CREATE TABLE `tastes` (
  `id_user` int(11) NOT NULL,
  `id_music` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `trajet`
--

CREATE TABLE `trajet` (
  `id` int(11) NOT NULL,
  `depart_date` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `depart_hour` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `depart` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `destination` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `etapes` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `places` int(11) NOT NULL,
  `bagages_petits` int(11) NOT NULL,
  `bagages_grands` int(11) NOT NULL,
  `notes` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_account` int(11) NOT NULL,
  `id_car` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `trajet`
--

INSERT INTO `trajet` (`id`, `depart_date`, `depart_hour`, `depart`, `destination`, `etapes`, `places`, `bagages_petits`, `bagages_grands`, `notes`, `id_account`, `id_car`) VALUES
(1, '03/04/2023', '10:02', 'Paris', 'Strasbourg', NULL, 3, 2, 1, NULL, 2, 1),
(3, '04/04/2023', '10:30', 'Armentières', 'Hazebrouck', NULL, 2, 3, 4, NULL, 3, 2);

-- --------------------------------------------------------

--
-- Structure de la table `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `token_number` int(11) NOT NULL,
  `price_euros` int(11) NOT NULL,
  `date` date NOT NULL,
  `id_user_1` int(11) NOT NULL,
  `id_user_2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ville` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cp` int(11) DEFAULT NULL,
  `adresse` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img_profil` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tokens` int(11) NOT NULL,
  `date_naissance` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `silence` varchar(24) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `nom`, `prenom`, `ville`, `cp`, `adresse`, `img_profil`, `tokens`, `date_naissance`, `silence`) VALUES
(1, 'test@test.fr', '[\"ROLE_ADMIN\"]', 'Testpass10!', 'Merlo', 'Florian', 'Armentières', 59280, 'test', '', 50, '20/10/2000', 'true'),
(2, 'test2@test.fr', '[\"ROLE_USER\"]', 'TestPass@10', 'MERLO', 'Florian', '', 0, '', '', 50, '', 'true'),
(3, 'test3@test.fr', '[\"ROLE_USER\"]', 'TestPass@11', 'test', 'test', '', 0, '', '', 50, '', ''),
(4, 'test@michel.fr', '[\"ROLE_ADMIN\"]', 'TestMichel@10', 'Dupont', 'Michel', 'Lille', 59000, 'test', '', 50, '10/10/1990', 'false');

-- --------------------------------------------------------

--
-- Structure de la table `user_trajet`
--

CREATE TABLE `user_trajet` (
  `id_user` int(11) NOT NULL,
  `id_trajet` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_User_ID_car` (`id_user`);

--
-- Index pour la table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_User_1_ID_chat` (`id_user_1`),
  ADD KEY `FK_User_2_ID_chat` (`id_user_2`);

--
-- Index pour la table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_User_ID` (`id_user`),
  ADD KEY `FK_Trajet_ID` (`id_trajet`);

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `message_chat`
--
ALTER TABLE `message_chat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_User_ID_message_chat` (`id_user`),
  ADD KEY `FK_Chat_ID_message_chat` (`id_chat`);

--
-- Index pour la table `music`
--
ALTER TABLE `music`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tastes`
--
ALTER TABLE `tastes`
  ADD PRIMARY KEY (`id_music`,`id_user`),
  ADD KEY `FK_User_ID_tastes` (`id_user`);

--
-- Index pour la table `trajet`
--
ALTER TABLE `trajet`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_Conducteur_UserID` (`id_account`),
  ADD KEY `FK_CarID` (`id_car`);

--
-- Index pour la table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_User_1_ID` (`id_user_1`),
  ADD KEY `FK_User_2_ID` (`id_user_2`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user_trajet`
--
ALTER TABLE `user_trajet`
  ADD PRIMARY KEY (`id_user`,`id_trajet`),
  ADD KEY `FK_TrajetID` (`id_trajet`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `car`
--
ALTER TABLE `car`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `message_chat`
--
ALTER TABLE `message_chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `music`
--
ALTER TABLE `music`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `trajet`
--
ALTER TABLE `trajet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `car`
--
ALTER TABLE `car`
  ADD CONSTRAINT `FK_User_ID_car` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `chat`
--
ALTER TABLE `chat`
  ADD CONSTRAINT `FK_User_1_ID_chat` FOREIGN KEY (`id_user_1`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_User_2_ID_chat` FOREIGN KEY (`id_user_2`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `FK_Trajet_ID` FOREIGN KEY (`id_trajet`) REFERENCES `trajet` (`id`),
  ADD CONSTRAINT `FK_User_ID` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `message_chat`
--
ALTER TABLE `message_chat`
  ADD CONSTRAINT `FK_Chat_ID_message_chat` FOREIGN KEY (`id_chat`) REFERENCES `chat` (`id`),
  ADD CONSTRAINT `FK_User_ID_message_chat` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `tastes`
--
ALTER TABLE `tastes`
  ADD CONSTRAINT `FK_Music_ID_tastes` FOREIGN KEY (`id_music`) REFERENCES `music` (`id`),
  ADD CONSTRAINT `FK_User_ID_tastes` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `trajet`
--
ALTER TABLE `trajet`
  ADD CONSTRAINT `FK_CarID` FOREIGN KEY (`id_car`) REFERENCES `car` (`id`),
  ADD CONSTRAINT `FK_Conducteur_UserID` FOREIGN KEY (`id_account`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `FK_User_1_ID` FOREIGN KEY (`id_user_1`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_User_2_ID` FOREIGN KEY (`id_user_2`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `user_trajet`
--
ALTER TABLE `user_trajet`
  ADD CONSTRAINT `FK_TrajetID` FOREIGN KEY (`id_trajet`) REFERENCES `trajet` (`id`),
  ADD CONSTRAINT `FK_UserID` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
