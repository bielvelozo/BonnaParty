<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-headers: *");
header('Content-Type: application/json');

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();



$method = $_SERVER['REQUEST_METHOD'];


switch ($method) {


    case "GET":
        $sql = "SELECT * FROM events";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $events = $stmt->fetchAll(PDO::FETCH_ASSOC);
  
        echo json_encode($events, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        
        break;

    case "POST":

        $eventData = file_get_contents('php://input');

        $event = json_decode($eventData);
        ;

        if ($event === null && json_last_error() !== JSON_ERROR_NONE) {
            $response = ['status' => 0, 'message' => 'Invalid JSON data'];
            echo json_encode($response);
            break;

        } else {

            // echo 'deu bom';

            $sql = "INSERT INTO events (name, description, state , city, address, date,  mobile, image_path, user_id) 
                    VALUES(:name, :description, :state , :city, :address, :date, :mobile, :image_path, :user_id)";
            $stmt = $conn->prepare($sql);

            $stmt->bindParam(':name', $event->name);
            $stmt->bindParam(':description', $event->description);
            $stmt->bindParam(':state', $event->state);
            $stmt->bindParam(':city', $event->city);
            $stmt->bindParam(':address', $event->address);
            $stmt->bindParam(':date', $event->dateAndHour);
            $stmt->bindParam(':mobile', $event->mobile);
            $stmt->bindParam(':image_path', $event->image);
            $stmt->bindParam(':user_id', $event->userID);


            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Evento criado com sucesso'];
            } else {
                $response = ['status' => 0, 'message' => 'Falha ou criar evento'];

            }
            echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

            break;

        }




}
?>