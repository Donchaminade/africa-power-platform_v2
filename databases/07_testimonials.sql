-- databases/07_testimonials.sql
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
('Dr. Amina Diallo', 'CEO, Tech Innovations Africa', 'L\'Africa Power Platform a été une expérience transformatrice. Les connexions établies et les connaissances partagées sont inestimables pour l\'écosystème technologique africain.', 'The Africa Power Platform was a transformative experience. The connections made and knowledge shared are invaluable for the African tech ecosystem.', 'https://picsum.photos/400/500?random=20', 1),
('Moussa Konaté', 'Développeur Power Platform', 'J\'ai appris énormément lors des ateliers et j\'ai pu échanger avec des experts de renommée mondiale. Une initiative à soutenir absolument !', 'I learned a lot during the workshops and was able to interact with world-renowned experts. An initiative that absolutely deserves support!', 'https://picsum.photos/400/500?random=21', 2);
