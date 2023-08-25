<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-headers: *");
header('Content-Type: application/json');

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();


$method = $_SERVER['REQUEST_METHOD'];


switch ($method) {


    case "POST":

        $temptData = file_get_contents('php://input');
        $tempt = json_decode($temptData);
        $id = $tempt->id;
        $email = $tempt->email;

        if ($tempt === null && json_last_error() !== JSON_ERROR_NONE) {
            $response = ['status' => 0, 'message' => 'Invalid JSON data'];
            echo json_encode($response);
            break;
        }

        if (isset($tempt->email) && isset($tempt->id)) {

            $sql = "SELECT id FROM register WHERE email = '$email'";

            if ($stmt = $conn->prepare($sql)) {
               
                if ($stmt->execute()) {
                    if ($stmt->rowCount() == 1) {
                        $email_err = "Este email já está em uso.";
                        $response = ['status' => 0, 'message' => $email_err];
                        echo json_encode($response);
                    }
                } else {
                    echo "Ops! Algo deu errado. Por favor, tente novamente mais tarde.";
                }

                // Fechar declaração
                unset($stmt);

            }
        }



        if (empty($email_err)) {

            $sql = "UPDATE register SET email='$email' WHERE id = '$id' ";

            if ($stmt = $conn->prepare($sql)) {


                if ($stmt->execute()) {

                    $response = ['status' => 1, 'message' => 'Email mudado com sucesso' , 'email' => $email];

                } else {
                    $response = ['status' => 0, 'message' => 'Ops!, algo deu errado, tente novamente mais tarde'];
                }

            } else {
                $response = ['status' => 0, 'message' => 'Ops!, algo deu errado, tente novamente mais tarde'];

            }

            echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

        }



}
?>