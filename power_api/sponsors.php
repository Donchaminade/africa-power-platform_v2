<?php
require_once 'config.php';
$db = getDb();
$stmt = $db->query("SELECT * FROM sponsors WHERE is_active = 1 ORDER BY FIELD(tier, 'platinum', 'gold', 'silver', 'community'), display_order ASC");
echo json_encode(['status' => 'success', 'data' => $stmt->fetchAll()]);
?>