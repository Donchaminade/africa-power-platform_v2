<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $pdo = getDb();
        $stmt = $pdo->query(
            "SELECT id, question_fr, question_en, answer_fr, answer_en 
             FROM faq 
             WHERE is_active = TRUE 
             ORDER BY display_order ASC"
        );
        $faqs = $stmt->fetchAll();

        http_response_code(200);
        echo json_encode(['data' => $faqs]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Only GET requests are allowed.']);
}
?>