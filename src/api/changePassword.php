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
        $password = $tempt->password;
        $hashedPassword = password_hash($password,  PASSWORD_DEFAULT);

        if ($tempt === null && json_last_error() !== JSON_ERROR_NONE) {
            $response = ['status' => 0, 'message' => 'Invalid JSON data'];
            echo json_encode($response);
            break;
        }

        if (isset($tempt->password) && isset($tempt->id)) {


            $sql = "SELECT password FROM register WHERE id = '$id'";

            if ($stmt = $conn->prepare($sql)) {
               
                if ($stmt->execute()) {
                    if ($stmt->rowCount() == 1) {
                        
                        $user = $stmt->fetch();
                        $originalPassword = $user["password"];
                        
                        if(password_verify($password, $originalPassword)) {

                            $pass_err = "Senha não pode ser igual a atual";
                            $response = ['status' => 0, 'message' => $pass_err];
                            echo json_encode($response);
                        }
                    } else {
                        echo 'Usuário não encontrado , tente relogar';
                    }
                } else {
                    echo "Ops! Algo deu errado. Por favor, tente novamente mais tarde.";
                }

                unset($stmt);

            }
        }



        if (empty($pass_err)) {

            $sql = "UPDATE register SET password='$hashedPassword' WHERE id = '$id' ";

            if ($stmt = $conn->prepare($sql)) {


                if ($stmt->execute()) {

                    $response = ['status' => 1, 'message' => 'Senha alterada com sucesso'];

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