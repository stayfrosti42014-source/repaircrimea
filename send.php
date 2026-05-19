<?php

header('Content-Type: application/json');

$token = "8378394328:AAGqUIZ6m8jtYG4IdsA7ei9kjoMFioyheYQ";

$chat_ids = [
    "1182845907",
    "483889693"
];

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'] ?? '';
$phone = $data['phone'] ?? '';
$city = $data['city'] ?? '';
$problem = $data['problem'] ?? '';

$text = "
🔧 Новая заявка CrimeaRepair

👤 Имя: $name
📞 Телефон: $phone
🏙 Город: $city
🛠 Проблема: $problem

🌐 Сайт: crimearepair.ru
";

foreach ($chat_ids as $chat_id) {

    $url = "https://api.telegram.org/bot$token/sendMessage";

    $post_fields = [
        'chat_id' => $chat_id,
        'text' => $text,
    ];

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Content-Type:application/json"
    ]);

    curl_setopt($ch, CURLOPT_URL, $url);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post_fields));

    curl_setopt($ch, CURLOPT_POST, true);

    curl_exec($ch);

    curl_close($ch);
}

echo json_encode([
    'success' => true
]);