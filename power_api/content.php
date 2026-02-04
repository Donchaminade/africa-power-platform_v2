<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $block_key = $_GET['block_key'] ?? null;

    try {
        $pdo = getDb();
        if ($block_key) {
            $stmt = $pdo->prepare(
                "SELECT block_key, title_fr, title_en, content_fr, content_en, last_updated 
                 FROM content_blocks 
                 WHERE block_key = :block_key"
            );
            $stmt->execute(['block_key' => $block_key]);
            $content = $stmt->fetch();
        } else {
            $stmt = $pdo->query(
                "SELECT block_key, title_fr, title_en, content_fr, content_en, last_updated 
                 FROM content_blocks"
            );
            $content = $stmt->fetchAll();
        }

        if ($content) {
            http_response_code(200);
            echo json_encode(['data' => $content]);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Content not found.']);
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Only GET requests are allowed.']);
}
?>