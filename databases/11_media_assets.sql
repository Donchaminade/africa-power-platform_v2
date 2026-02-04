-- databases/11_media_assets.sql
-- Table pour stocker les assets média (images, vidéos, documents)

CREATE TABLE `media_assets` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `asset_key` VARCHAR(100) NOT NULL UNIQUE COMMENT 'Clé unique pour identifier l''asset (ex: logo, hero_banner)',
  `file_url` VARCHAR(2048) NOT NULL,
  `alt_text_fr` VARCHAR(255) NULL,
  `alt_text_en` VARCHAR(255) NULL,
  `asset_type` ENUM('image', 'video', 'document') NOT NULL DEFAULT 'image',
  `uploaded_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Données d'exemple
INSERT INTO `media_assets` (`asset_key`, `file_url`, `alt_text_fr`, `alt_text_en`, `asset_type`) VALUES
('hero_banner', 'https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6', 'Bannière principale de l''événement Africa Power Platform', 'Main banner of the Africa Power Platform event', 'image'),
('logo_app', 'https://via.placeholder.com/150x50.png?text=AfricaPowerPlatform', 'Logo de l''application', 'Application logo', 'image');
