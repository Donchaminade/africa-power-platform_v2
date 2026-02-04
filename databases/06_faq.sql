-- databases/06_faq.sql
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
('Qu\'est-ce que l\'Africa Power Platform ?', 'What is the Africa Power Platform?', 'L\'Africa Power Platform est le premier sommet dédié à Microsoft Power Platform en Afrique de l\'Ouest, visant à éduquer, connecter et impacter la communauté.', 'The Africa Power Platform is the first summit dedicated to Microsoft Power Platform in West Africa, aiming to educate, connect, and impact the community.', 1),
('Qui devrait participer ?', 'Who should participate?', 'Développeurs, entrepreneurs, décideurs, étudiants et toute personne intéressée par le low-code et la transformation digitale en Afrique.', 'Developers, entrepreneurs, decision-makers, students, and anyone interested in low-code and digital transformation in Africa.', 2),
('Comment puis-je devenir sponsor ?', 'How can I become a sponsor?', 'Vous pouvez nous contacter via le formulaire dédié sur notre site web ou envoyer un email à contact@africapowerplatform.org.', 'You can contact us via the dedicated form on notre site web ou envoyer un email à contact@africapowerplatform.org.', 3);
