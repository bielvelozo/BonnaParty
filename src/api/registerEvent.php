<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-headers: *");
header('Content-Type: application/json');

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

ini_set('display_errors', 1);
ini_set('display_startup_erros', 1);
error_reporting(E_ALL);



$method = $_SERVER['REQUEST_METHOD'];


switch ($method) {


    case "GET":

        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            $sql = "SELECT * FROM events WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            $event = $stmt->fetch(PDO::FETCH_ASSOC);
            if ($event) {
                echo json_encode($event, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
            } else {
                echo json_encode(['status' => 0, 'message' => 'Event not found'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
            }
        } else if (isset($_GET['user_id'])) {
            $user_id = $_GET['user_id'];
            $sql = "SELECT * FROM events WHERE user_id = :user_id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':user_id', $user_id);
            $stmt->execute();
            $event = $stmt->fetch(PDO::FETCH_ASSOC);
            if ($event) {
                echo json_encode($event, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
            } else {
                echo json_encode(['status' => 0, 'message' => 'Event not found'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
            }
        } else {
            $sql = "SELECT * FROM events";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $events = $stmt->fetchAll(PDO::FETCH_ASSOC);

            echo json_encode($events, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

        }


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

            $sql = "INSERT INTO events (name, description,cep, street, number, state , city, hood, date,  mobile, image_path, user_id) 
                    VALUES(:name, :description, :cep, :street, :number, :state , :city, :hood, :date, :mobile, :image_path, :user_id)";
            $stmt = $conn->prepare($sql);

            $stmt->bindParam(':name', $event->name);
            $stmt->bindParam(':description', $event->description);
            $stmt->bindParam(':cep', $event->cep);
            $stmt->bindParam(':street', $event->street);
            $stmt->bindParam(':number', $event->number);
            $stmt->bindParam(':state', $event->state);
            $stmt->bindParam(':city', $event->city);
            $stmt->bindParam(':hood', $event->hood);
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