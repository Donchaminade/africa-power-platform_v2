-- databases/10_content_blocks.sql
-- Table pour stocker des blocs de contenu dynamique (ex: sections "À propos", "Mission", etc.)

CREATE TABLE `content_blocks` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `block_key` VARCHAR(100) NOT NULL UNIQUE COMMENT 'Clé unique pour identifier le bloc (ex: about_section, mission_statement)',
  `title_fr` VARCHAR(255) NULL,
  `title_en` VARCHAR(255) NULL,
  `content_fr` TEXT NULL,
  `content_en` TEXT NULL,
  `last_updated` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Données d'exemple
INSERT INTO `content_blocks` (`block_key`, `title_fr`, `title_en`, `content_fr`, `content_en`) VALUES
('about_main', 'Une plateforme pour l\'avenir technologique de l\'Afrique', 'A platform for Africa\'s technological future', 'Africa Power Platform est une initiative panafricaine structurante, pensée comme un rendez-vous annuel itinérant pour renforcer les communautés Microsoft Power Platform locales à travers l\'Afrique francophone et anglophone.', 'Africa Power Platform is a structuring pan-African initiative, designed as an annual, itinerant event to strengthen local Microsoft Power Platform communities across French and English-speaking Africa.'),
('about_secondary', NULL, NULL, 'Au-delà d\'un simple événement, nous bâtissons une plateforme collaborative continentale pour favoriser le partage de compétences, créer des ponts entre talents et entreprises, et faire émerger des solutions technologiques adaptées aux enjeux africains.', 'Beyond a simple event, we are building a continental collaborative platform to foster skill sharing, create bridges between talents and companies, and promote the emergence of technological solutions adapted to African challenges.');