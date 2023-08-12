<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-headers: *");
header('Content-Type: application/json');

$response = array();


if($_FILES['image']) {

  $image_file = $_FILES["image"];
  $image_name = $_FILES["image"]["name"];
  $image_tmp = $_FILES["image"]['tmp_name'];
  $error = $_FILES['image']['error'];
  $image_type = exif_imagetype($image_tmp);

  if($error > 0) {
    
    $response = array(
      'status:' => 'error',
      'error:' => true,
      "message" => "error uploading the file!"
    );

  } else {

    if(!$image_type) {
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



}

echo json_encode($response);

// class imagePath {
//   public $image_name;
// }

?>