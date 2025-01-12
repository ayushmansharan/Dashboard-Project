<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Simulated database connection
$host = 'localhost';
$dbname = 'dashboard_db';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo json_encode(['error' => 'Database connection failed']);
    exit;
}

// Handle different API endpoints
$action = $_GET['action'] ?? '';

switch($action) {
    case 'stats':
        // Simulated stats data
        $stats = [
            'revenue' => [
                'total' => 54230,
                'increase' => 8.3
            ],
            'users' => [
                'total' => 2430,
                'increase' => 12.1
            ],
            'orders' => [
                'total' => 485,
                'increase' => 5.7
            ],
            'conversion' => [
                'rate' => 3.45,
                'increase' => 2.4
            ]
        ];
        echo json_encode($stats);
        break;

    case 'chart_data':
        // Simulated chart data
        $chartData = [
            'revenue' => [
                'labels' => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                'data' => [30000, 35000, 32000, 40000, 38000, 45000]
            ],
            'users' => [
                'labels' => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                'data' => [150, 200, 180, 250, 220, 300]
            ]
        ];
        echo json_encode($chartData);
        break;

    default:
        echo json_encode(['error' => 'Invalid action']);
}
?>