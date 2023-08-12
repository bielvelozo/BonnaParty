<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-headers: *");
header('Content-Type: application/json');

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();


$method = $_SERVER['REQUEST_METHOD'];


switch($method) {
 
   case "GET":
      $sql = "SELECT * FROM events";
      $stmt = $conn->prepare($sql);
      $stmt->execute();
      $events = $stmt->fetchAll(PDO::FETCH_ASSOC);

      echo json_encode($events, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
      break;

   case "POST":
      //upload image
      

      //insert db
      $eventData = file_get_contents('php://input');

      $event = json_decode($eventData);
  ;
      
      if ($event === null && json_last_error() !== JSON_ERROR_NONE) {
         $response = ['status' => 0, 'message' => 'Invalid JSON data'];
         echo json_encode($response);
         break;
     }
      
      $sql = "INSERT INTO events(id, name, date, state, city, address, time, mobile , image) VALUES(null, :name, :date, :state, :city, :address, :time, :mobile, :image)";
      $stmt = $conn->prepare($sql);

      $stmt->bindParam(':name', $event->name);
      $stmt->bindParam(':date', $event->date);
      $stmt->bindParam(':state', $event->state);
      $stmt->bindParam(':city', $event->city);
      $stmt->bindParam(':address', $event->address);
      $stmt->bindParam(':time', $event->time);
      $stmt->bindParam(':mobile', $event->mobile);
      $stmt->bindParam(':image', $event->$image_name);
      

      if($stmt->execute()) {
         $response = ['status' => 1, 'message' => 'record created succesfully'];
      } else {
         $response = ['status' => 0, 'message' => 'failed to create record'];

      }
      echo json_encode($response , JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
      break;


}  