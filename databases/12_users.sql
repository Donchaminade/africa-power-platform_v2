-- databases/12_users.sql
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
