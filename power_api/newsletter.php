<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $email = $data['email'] ?? '';

    // Basic validation
    if (empty($email)) {
        http_response_code(400);
        echo json_encode(['error' => 'Email is required.']);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid email format.']);
        exit;
    }

    try {
        $pdo = getDb();
        
        // Check if email already exists
        $stmt = $pdo->prepare("SELECT COUNT(*) FROM newsletter_subscribers WHERE email = :email");
        $stmt->execute(['email' => $email]);
        if ($stmt->fetchColumn() > 0) {
            http_response_code(409); // Conflict
            echo json_encode(['error' => 'Email already subscribed.']);
            exit;
        }

        $stmt = $pdo->prepare(
            "INSERT INTO newsletter_subscribers (email) 
             VALUES (:email)"
        );
        $stmt->execute([
            'email' => $email,
        ]);

        http_response_code(201); // Created
        echo json_encode(['message' => 'Successfully subscribed to newsletter.']);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Only POST requests are allowed.']);
}
?>