<?php
require_once 'config.php';

$db = getDb();
$stmt = $db->query("SELECT * FROM speakers WHERE is_active = 1 ORDER BY display_order ASC");
$speakers_raw = $stmt->fetchAll();

// Ajout de champs pour la compatibilité avec le frontend existant
$speakers_formatted = array_map(function($speaker) {
    $speaker['title_fr'] = $speaker['title'];
    $speaker['title_en'] = $speaker['title'];
    $speaker['category_fr'] = $speaker['category'];
    $speaker['category_en'] = $speaker['category'];
    $speaker['bio_fr'] = "Expert passionné de l'écosystème Power Platform, accompagnant la transformation digitale à travers le continent.";
    return $speaker;
}, $speakers_raw);

echo json_encode([
    'status' => 'success',
    'count' => count($speakers_formatted),
    'data' => $speakers_formatted
]);
?>