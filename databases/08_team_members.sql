-- databases/08_team_members.sql
-- Table pour stocker les membres de l'équipe d'organisation

CREATE TABLE `team_members` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `role_fr` VARCHAR(255) NOT NULL,
  `role_en` VARCHAR(255) NOT NULL,
  `image_url` VARCHAR(2048) NULL,
  `linkedin_url` VARCHAR(2048) NULL,
  `twitter_url` VARCHAR(2048) NULL,
  `display_order` INT NOT NULL DEFAULT 0,
  `is_active` BOOLEAN NOT NULL DEFAULT TRUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Données d'exemple
INSERT INTO `team_members` (`name`, `role_fr`, `role_en`, `image_url`, `linkedin_url`, `display_order`) VALUES
('Fatima Zahra', 'Présidente', 'President', 'https://picsum.photos/400/500?random=30', 'https://linkedin.com/in/fatima', 1),
('Kofi Mensah', 'Directeur des Opérations', 'Operations Director', 'https://picsum.photos/400/500?random=31', 'https://linkedin.com/in/kofi', 2),
('Nadia Khan', 'Responsable Communication', 'Communications Manager', 'https://picsum.photos/400/500?random=32', 'https://linkedin.com/in/nadia', 3);
