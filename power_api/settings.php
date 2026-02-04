<?php
require_once 'config.php';
$db = getDb();
$stmt = $db->query("SELECT setting_key, setting_value FROM event_settings");
$settings = [];
while ($row = $stmt->fetch()) {
    $settings[$row['setting_key']] = $row['setting_value'];
}
echo json_encode(['status' => 'success', 'data' => $settings]);
?>