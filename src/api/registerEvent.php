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

        $eventData = file_get_contents('php://input');

        $event = json_decode($eventData);
        ;

        if ($event === null && json_last_error() !== JSON_ERROR_NONE) {
            $response = ['status' => 0, 'message' => 'Invalid JSON data'];
            echo json_encode($response);
            break;

        } else {

            echo 'deu bom';

            var_dump($event->userID);

            // $sql = "INSERT INTO register (name, email, password) VALUES(:name, :email, :password)";
            // $stmt = $conn->prepare($sql);

            // $stmt->bindParam(':name', $user->name);
            // $stmt->bindParam(':email', $user->email);
            // $stmt->bindParam(':password', $hash);



            // if ($stmt->execute()) {
            //     $response = ['status' => 1, 'message' => 'Conta criada com sucesso'];
            // } else {
            //     $response = ['status' => 0, 'message' => 'Falha ou criar conta'];

            // }
            // echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

            // break;

        }




    //   if(empty($email_err)){

    //       $hash = password_hash($user->password,  PASSWORD_DEFAULT);

    //        $sql = "INSERT INTO register (name, email, password) VALUES(:name, :email, :password)";
    //        $stmt = $conn->prepare($sql);

    //        $stmt->bindParam(':name', $user->name);
    //        $stmt->bindParam(':email', $user->email);
    //        $stmt->bindParam(':password', $hash);



    //        if($stmt->execute()) {
    //           $response = ['status' => 1, 'message' => 'Conta criada com sucesso'];
    //        } else {
    //           $response = ['status' => 0, 'message' => 'Falha ou criar conta'];

    //        }
    //        echo json_encode($response , JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

    //        break;
    //      }



}
?>