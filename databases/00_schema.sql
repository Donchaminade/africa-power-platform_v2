-- databases/00_schema.sql
-- Schéma de base de données simplifié pour Africa Power Platform
-- Approche "Configuration-Driven"

-- Supprime les anciennes tables si elles existent pour un redémarrage propre.
DROP TABLE IF EXISTS `gallery`, `users`, `team_members`, `testimonials`, `faq`, `newsletter_subscribers`, `registrations`, `sponsors`, `program_items`, `speakers`, `content_blocks`, `media_assets`, `contact_messages`;

-- =============================================
-- 1. PILIER CONFIGURATION (La Tour de Contrôle)
-- =============================================

CREATE TABLE `event_settings` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `setting_key` VARCHAR(100) NOT NULL UNIQUE COMMENT 'Clé de configuration (ex: event_start_date)',
  `setting_value` TEXT COMMENT 'Valeur de configuration',
  `description` VARCHAR(255) COMMENT 'Description du paramètre pour le back-office'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `event_settings` (`setting_key`, `setting_value`, `description`) VALUES
-- Informations sur l'événement
('event_venue_name', 'Palais des Congrès de Cotonou', 'Nom du lieu de l''événement'),
('event_address', 'Boulevard de la Marina, Cotonou, Bénin', 'Adresse complète de l''événement'),
('event_start_date', '2026-06-20T09:00:00', 'Date et heure de début (format ISO 8601)'),
('event_end_date', '2026-06-21T17:00:00', 'Date et heure de fin (format ISO 8601)'),
('google_maps_embed_url', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.111833544525!2d2.404550615349471!3d6.379200995386005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10249df1b9e54865%3A0x6b3589b389f1d24a!2sPalais%20des%20Congr%C3%A8s%20de%20Cotonou!5e0!3m2!1sfr!2sfr!4v1672522600000', 'URL d''intégration de Google Maps'),

-- Liens externes (Formulaires, etc.)
('url_registration_attendee', 'https://forms.office.com/r/UCMe9tdkty', 'Lien d''inscription pour les participants'),
('url_become_sponsor', 'https://forms.office.com/r/8NGPjVvrtm', 'Lien pour devenir partenaire/sponsor'),
('url_become_speaker', 'https://forms.office.com/r/MFLQb3FZej', 'Lien pour proposer un talk (speaker)'),
('url_propose_panel', 'https://forms.office.com/r/qKqLf9284z', 'Lien pour proposer un panel de discussion'),

-- Contact & Communauté
('contact_email', 'contact@africapowerplatform.org', 'Email de contact principal'),
('contact_phone', '+229 68 38 01 12', 'Numéro de téléphone principal'),
('whatsapp_community_url', 'https://chat.whatsapp.com/votre-lien', 'Lien d''invitation au groupe WhatsApp'),

-- Réseaux Sociaux
('social_linkedin_url', 'https://linkedin.com/company/africapowerplatform', 'URL de la page LinkedIn'),
('social_twitter_url', 'https://twitter.com/africapp', 'URL du profil Twitter'),
('social_facebook_url', 'https://facebook.com/africapowerplatform', 'URL de la page Facebook');


-- =============================================
-- 2. PILIER DONNÉES DYNAMIQUES
-- =============================================

CREATE TABLE `speakers` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `company` VARCHAR(255) NULL,
  `category` VARCHAR(100) NULL,
  `image_url` VARCHAR(2048) NOT NULL,
  `linkedin_url` VARCHAR(2048) NULL,
  `is_active` BOOLEAN NOT NULL DEFAULT TRUE,
  `display_order` INT NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `sponsors` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `logo_url` VARCHAR(2048) NOT NULL,
  `website_url` VARCHAR(2048) NULL,
  `tier` ENUM('platinum', 'gold', 'silver', 'community') NOT NULL DEFAULT 'community',
  `is_active` BOOLEAN NOT NULL DEFAULT TRUE,
  `display_order` INT NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- =============================================
-- 3. PILIER DONNÉES UTILISATEURS
-- =============================================

CREATE TABLE `registrations` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `company` VARCHAR(255) NULL,
  `job_title` VARCHAR(255) NULL,
  `pass_type` ENUM('conference', 'full_access', 'bootcamp_applicant') NOT NULL,
  `registration_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;