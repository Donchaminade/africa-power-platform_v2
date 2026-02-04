-- databases/13_gallery.sql
-- Table pour stocker les images de la galerie

CREATE TABLE `gallery` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title_fr` VARCHAR(255) NULL,
  `title_en` VARCHAR(255) NULL,
  `image_url` VARCHAR(2048) NOT NULL,
  `description_fr` TEXT NULL,
  `description_en` TEXT NULL,
  `event_year` INT NULL,
  `display_order` INT NOT NULL DEFAULT 0,
  `is_active` BOOLEAN NOT NULL DEFAULT TRUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Données d'exemple
INSERT INTO `gallery` (`title_fr`, `title_en`, `image_url`, `event_year`, `display_order`) VALUES
('Moment clé', 'Key moment', 'https://picsum.photos/800/600?random=40', 2023, 1),
('Participants engagés', 'Engaged participants', 'https://picsum.photos/800/600?random=41', 2023, 2),
('Présentation inspirante', 'Inspiring presentation', 'https://picsum.photos/800/600?random=42', 2023, 3);
