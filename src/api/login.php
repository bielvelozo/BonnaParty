<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-headers: *");
header('Content-Type: application/json');

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

// session_start();
// error_reporting(E_ALL);
// ini_set('display_errors', 1);



$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {


    case "POST":

        $temptData = file_get_contents('php://input');
        $tempt = json_decode($temptData);


        if ($tempt === null && json_last_error() !== JSON_ERROR_NONE) {
            $response = ['status' => 0, 'message' => 'Invalid JSON data'];
            echo json_encode($response);
            break;
        }
        if (isset($tempt->email) && isset($tempt->password)) {
            $email = $tempt->email;
            $password = $tempt->password;

            $sql = "SELECT * FROM register WHERE email = '$email' ";
            if ($stmt = $conn->prepare($sql)) {
                $stmt->execute();

                if ($stmt->rowCount() == 1) {
                    
                    
                    $users = $stmt->fetch();
                    $hashed_password = $users["password"];
                    
                    if (password_verify($password, $hashed_password)) {
                        echo json_encode($users, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

                        // $userID = $users["id"];
                        
                        // $_SESSION["id"] = $users["id"];

                        break;
                    } else {
                        $response = ['status' => 0, 'message' => 'Senha incorreta'];

                    }
                } else {
                    $response = ['status' => 0, 'message' => 'Não existe um conta com este email'];
                }

            } else {
                $response = ['status' => 0, 'message' => 'Ops!, algo deu errado, tente novamente mais tarde'];

            }

            echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

        } else {
            $response = ['status' => 0, 'message' => 'invalid input'];
            echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

        }




}
?>