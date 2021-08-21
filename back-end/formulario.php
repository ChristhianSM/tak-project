<?php
require_once "helpers.php";

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "contactos";

$lead = Array(
    'name' => $_POST["name"],
    'phone' => $_POST["phone"],
    'email' => $_POST["email"],
    'message' => $_POST["message"],
    'subjects' => $_POST["subjects"]
);

$response = Array(
    "payload" => $lead,
    "error_status" => false,
    "error_detail" => ""
);

$conn = new mysqli($servername, $username, $password, $dbname);

!$conn->connect_error or die(jsonError($response, "Error en la conexion de la base de datos"));

//Validaciones y Sanitizaciones
$lead["name"] = sanitizeString($lead["name"]) or die(jsonError($response, "No se pudo sanitizar el nombre"));
$lead["message"] = sanitizeString($lead["message"]) or die(jsonError($response, "No se pudo sanitizar el mensaje"));
$lead["phone"] = sanitizeNumberInt($lead["phone"]) or die(jsonError($response, "No se pudo sanitizar el telefono"));

$lead["email"] = sanitizeEmail($lead["email"]);
validateEmail($lead["email"]) or die(jsonError($response, "Email no válido"));

$lead = testInputArr($lead, $conn);

$response["payload"] = $lead;

$insertLead = "INSERT INTO leads (nombre, email, telefono, mensaje)
    VALUES ('{$lead["name"]}', '{$lead["email"]}', '{$lead["phone"]}', '{$lead["message"]}');";

$conn->query($insertLead) or die(jsonError($response, "Fallo la insercion del lead: {$conn->error}"));

$insertedLeadId = $conn->insert_id;

foreach ($lead["subjects"] as $subject){
    $insertSubject = "INSERT INTO temas (tema, leads_id)
    VALUES ('{$subject}', '{$insertedLeadId}');";

    $conn->query($insertSubject) or die(jsonError($response, "Fallo la insercion del tema {$subject}: {$conn->error}"));
}
$conn->close();

$response["message"] = "Gracias por su consulta.";
echo jsonSuccess($response);