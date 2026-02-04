-- Script de création de base de données pour Africa Power Platform
-- Ce fichier contient toutes les définitions de tables et les données d'exemple.
-- Exécutez ce script sur votre serveur MySQL pour initialiser la base de données.

-- Contenu de databases/00_schema.sql
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

-- Contenu de databases/01_speakers.sql
-- Données d'exemple pour la table `speakers`

INSERT INTO `speakers` (`name`, `title`, `company`, `category`, `image_url`, `display_order`) VALUES
('Adama Traoré', 'Microsoft MVP, Expert Power BI', 'Gouvernement du Mali', 'DATA & ANALYTICS', 'https://picsum.photos/400/500?random=10', 1),
('Sarah Kouamé', 'Solution Architect, Dynamics 365', 'Société Générale', 'BUSINESS APPS', 'https://picsum.photos/400/500?random=11', 2),
('David Okoro', 'Founder, Low-Code Africa', 'Low-Code Africa', 'ENTREPRENEURIAT', 'https://picsum.photos/400/500?random=12', 3),
('Aisha Bello', 'Women In Tech Lead', 'Tech4Her', 'IMPACT SOCIAL', 'https://picsum.photos/400/500?random=13', 4);

-- Contenu de databases/02_program_items.sql
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
('keynote', 'Keynote d''ouverture', 'Opening Keynote', 'Inspiration, vision et partage autour de la transformation digitale.', 'Inspiration, vision, and insights on digital transformation.', 1, '2026-06-20 09:00:00', '2026-06-20 10:00:00', 'day1', 1),
('panel', 'Panel: L''impact du Low-Code en Afrique', 'Panel: The Impact of Low-Code in Africa', 'Discussion sur les opportunités et défis du low-code.', 'Discussion on the opportunities and challenges of low-code.', NULL, '2026-06-20 10:30:00', '2026-06-20 11:30:00', 'day1', 2),
('workshop', 'Atelier Power Apps pour débutants', 'Power Apps Workshop for Beginners', 'Apprenez à construire votre première application.', 'Learn to build your first app.', 2, '2026-06-21 09:00:00', '2026-06-21 12:00:00', 'day2', 1);

-- Contenu de databases/03_sponsors.sql
-- Données d'exemple pour la table `sponsors`

INSERT INTO `sponsors` (`name`, `logo_url`, `tier`, `display_order`) VALUES
('Microsoft', 'https://logo.clearbit.com/microsoft.com', 'platinum', 1),
('MTN', 'https://logo.clearbit.com/mtn.com', 'gold', 2),
('Orange', 'https://logo.clearbit.com/orange.com', 'gold', 3),
('Moov Africa', 'https://logo.clearbit.com/moov.africa', 'silver', 4);

-- Contenu de databases/04_registrations.sql
-- Données d'exemple pour la table `registrations`

INSERT INTO `registrations` (`name`, `email`, `company`, `job_title`, `pass_type`) VALUES
('Jean Dupont', 'jean.dupont@example.com', 'Tech Solutions Inc.', 'Développeur', 'full_access'),
('Marie Curie', 'marie.curie@example.com', 'InnovLab', 'Scientifique', 'conference');

-- Contenu de databases/05_newsletter_subscribers.sql
-- Table pour stocker les abonnés à la newsletter

CREATE TABLE `newsletter_subscribers` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `subscribed_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Données d'exemple
INSERT INTO `newsletter_subscribers` (`email`) VALUES
('subscriber1@example.com'),
('subscriber2@example.com');

-- Contenu de databases/06_faq.sql
-- Table pour les questions fréquemment posées (FAQ)

CREATE TABLE `faq` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `question_fr` VARCHAR(255) NOT NULL,
  `question_en` VARCHAR(255) NOT NULL,
  `answer_fr` TEXT NOT NULL,
  `answer_en` TEXT NOT NULL,
  `display_order` INT NOT NULL DEFAULT 0,
  `is_active` BOOLEAN NOT NULL DEFAULT TRUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Données d'exemple
INSERT INTO `faq` (`question_fr`, `question_en`, `answer_fr`, `answer_en`, `display_order`) VALUES
('Qu''est-ce que l''Africa Power Platform ?', 'What is the Africa Power Platform?', 'L''Africa Power Platform est le premier sommet dédié à Microsoft Power Platform en Afrique de l''Ouest, visant à éduquer, connecter et impacter la communauté.', 'The Africa Power Platform is the first summit dedicated to Microsoft Power Platform in West Africa, aiming to educate, connect, and impact the community.', 1),
('Qui devrait participer ?', 'Who should participate?', 'Développeurs, entrepreneurs, décideurs, étudiants et toute personne intéressée par le low-code et la transformation digitale en Afrique.', 'Developers, entrepreneurs, decision-makers, students, and anyone interested in low-code and digital transformation in Africa.', 2),
('Comment puis-je devenir sponsor ?', 'How can I become a sponsor?', 'Vous pouvez nous contacter via le formulaire dédié sur notre site web ou envoyer un email à contact@africapowerplatform.org.', 'You can contact us via the dedicated form on notre site web ou envoyer un email à contact@africapowerplatform.org.', 3);

-- Contenu de databases/07_testimonials.sql
-- Table pour stocker les témoignages

CREATE TABLE `testimonials` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `author_name` VARCHAR(255) NOT NULL,
  `author_title` VARCHAR(255) NULL,
  `text_fr` TEXT NOT NULL,
  `text_en` TEXT NOT NULL,
  `image_url` VARCHAR(2048) NULL,
  `display_order` INT NOT NULL DEFAULT 0,
  `is_active` BOOLEAN NOT NULL DEFAULT TRUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Données d'exemple
INSERT INTO `testimonials` (`author_name`, `author_title`, `text_fr`, `text_en`, `image_url`, `display_order`) VALUES
('Dr. Amina Diallo', 'CEO, Tech Innovations Africa', 'L''Africa Power Platform a été une expérience transformatrice. Les connexions établies et les connaissances partagées sont inestimables pour l''écosystème technologique africain.', 'The Africa Power Platform was a transformative experience. The connections made and knowledge shared are invaluable for the African tech ecosystem.', 'https://picsum.photos/400/500?random=20', 1),
('Moussa Konaté', 'Développeur Power Platform', 'J''ai appris énormément lors des ateliers et j''ai pu échanger avec des experts de renommée mondiale. Une initiative à soutenir absolument !', 'I learned a lot during the workshops and was able to interact with world-renowned experts. An initiative that absolutely deserves support!', 'https://picsum.photos/400/500?random=21', 2);

-- Contenu de databases/08_team_members.sql
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

-- Contenu de databases/10_content_blocks.sql
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
('about_main', 'Une plateforme pour l''avenir technologique de l''Afrique', 'A platform for Africa\'s technological future', 'Africa Power Platform est une initiative panafricaine structurante, pensée comme un rendez-vous annuel itinérant pour renforcer les communautés Microsoft Power Platform locales à travers l''Afrique francophone et anglophone.', 'Africa Power Platform is a structuring pan-African initiative, designed as an annual, itinerant event to strengthen local Microsoft Power Platform communities across French and English-speaking Africa.'),
('about_secondary', NULL, NULL, 'Au-delà d''un simple événement, nous bâtissons une plateforme collaborative continentale pour favoriser le partage de compétences, créer des ponts entre talents et entreprises, et faire émerger des solutions technologiques adaptées aux enjeux africains.', 'Beyond a simple event, we are building a continental collaborative platform to foster skill sharing, create bridges between talents and companies, and promote the emergence of technological solutions adapted to African challenges.');

-- Contenu de databases/11_media_assets.sql
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

-- Contenu de databases/12_users.sql
-- Table pour stocker les utilisateurs (administrateurs, éditeurs, etc.)

CREATE TABLE `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(255) NOT NULL UNIQUE,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL,
  `role` ENUM('admin', 'editor', 'viewer') NOT NULL DEFAULT 'viewer',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `last_login` TIMESTAMP NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Données d'exemple
-- Mot de passe pour 'admin' est 'admin_password' (haché avec PASSWORD_DEFAULT)
INSERT INTO `users` (`username`, `email`, `password_hash`, `role`) VALUES
('admin', 'admin@africapowerplatform.org', '$2y$10$p0Rk.Y2M.qG9f.fD2f.aO.8Z.7Z.7Z.7Z.7Z.7Z.7Z.7Z.7Z.7', 'admin');

-- Contenu de databases/13_gallery.sql
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

-- Contenu de databases/14_contact_messages.sql
-- Table pour stocker les messages de contact envoyés via le formulaire

CREATE TABLE `contact_messages` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `subject` VARCHAR(255) NULL,
  `message` TEXT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Données d'exemple
INSERT INTO `contact_messages` (`name`, `email`, `subject`, `message`) VALUES
('Alice Dubois', 'alice@example.com', 'Question générale', 'Bonjour, j''ai une question concernant l''événement.'),
('Bob Martin', 'bob@example.com', NULL, 'Je suis intéressé par le partenariat.');
