-- databases/02_program_items.sql
-- Table pour stocker les éléments du programme de l'événement

CREATE TABLE `program_items` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `type` ENUM('keynote', 'panel', 'session', 'workshop', 'networking') NOT NULL,
  `title_fr` VARCHAR(255) NOT NULL,
  `title_en` VARCHAR(255) NOT NULL,
  `description_fr` TEXT NULL,
  `description_en` TEXT NULL,
  `speaker_id` INT NULL, -- Lié à la table speakers
  `start_time` DATETIME NOT NULL,
  `end_time` DATETIME NOT NULL,
  `day` ENUM('day1', 'day2') NOT NULL,
  `is_active` BOOLEAN NOT NULL DEFAULT TRUE,
  `display_order` INT NOT NULL DEFAULT 0,
  FOREIGN KEY (`speaker_id`) REFERENCES `speakers`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Données d'exemple
INSERT INTO `program_items` (`type`, `title_fr`, `title_en`, `description_fr`, `description_en`, `speaker_id`, `start_time`, `end_time`, `day`, `display_order`) VALUES
('keynote', 'Keynote d\'ouverture', 'Opening Keynote', 'Inspiration, vision et partage autour de la transformation digitale.', 'Inspiration, vision, and insights on digital transformation.', 1, '2026-06-20 09:00:00', '2026-06-20 10:00:00', 'day1', 1),
('panel', 'Panel: L\'impact du Low-Code en Afrique', 'Panel: The Impact of Low-Code in Africa', 'Discussion sur les opportunités et défis du low-code.', 'Discussion on the opportunities and challenges of low-code.', NULL, '2026-06-20 10:30:00', '2026-06-20 11:30:00', 'day1', 2),
('workshop', 'Atelier Power Apps pour débutants', 'Power Apps Workshop for Beginners', 'Apprenez à construire votre première application.', 'Learn to build your first app.', 2, '2026-06-21 09:00:00', '2026-06-21 12:00:00', 'day2', 1);
