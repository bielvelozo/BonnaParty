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

        if (isset($_FILES['image'])) {


            $image_file = $_FILES["image"];
            $image_name = $_FILES["image"]["name"];
            $image_tmp = $_FILES["image"]['tmp_name'];
            $error = $_FILES['image']['error'];
            $image_type = exif_imagetype($image_tmp);

            if ($error > 0) {

                $response = array(
                    'status:' => 'error',
                    'error:' => true,
                    "message" => "error uploading the file!"
                );

            } else {

                if (!$image_type) {
                    die('Uploaded file is not an image');
                }

                if (filesize($image_tmp) <= 0) {
                    die('Uploaded file has no contents.');
                }

                $image_extension = image_type_to_extension($image_type, true);
                $image_name = bin2hex(random_bytes(16)) . $image_extension;


                $response = array(
                    'status:' => 'success',
                    'error:' => false,
                    "message" => "File uploaded succesfully $image_name!"
                );

                move_uploaded_file(
                    $image_file["tmp_name"],
                    __DIR__ . "/images/" . $image_name
                );
            }



        } else {
            $temptData = file_get_contents('php://input');
            $tempt = json_decode($temptData);


            if ($tempt === null && json_last_error() !== JSON_ERROR_NONE) {
                $response = ['status' => 0, 'message' => 'Invalid JSON data'];
                echo json_encode($response);

            }

        }





}
?>