-- databases/14_contact_messages.sql
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
