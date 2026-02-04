-- databases/05_newsletter_subscribers.sql
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
