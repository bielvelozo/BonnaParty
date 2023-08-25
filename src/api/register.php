<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-headers: *");
header('Content-Type: application/json');

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();


$method = $_SERVER['REQUEST_METHOD'];


switch($method) {


   case "POST":
      
      $userData = file_get_contents('php://input');

      $user = json_decode($userData);
  ;
      
      if ($user === null && json_last_error() !== JSON_ERROR_NONE) {
         $response = ['status' => 0, 'message' => 'Invalid JSON data'];
         echo json_encode($response);
         break;

     } else{
      $sql = "SELECT id FROM register WHERE email = :email";
         
         if($stmt = $conn->prepare($sql)){
             // Vincule as variáveis à instrução preparada como parâmetros
             $stmt->bindParam(':email', $user->email);
             
      
             // Tente executar a declaração preparada
             if($stmt->execute()){
                 if($stmt->rowCount() > 1){
                     $email_err = "Este email já está em uso.";
                     $response = ['status' => 0, 'message' => $email_err];
                     echo json_encode($response);
                 } 
             } else{
                 echo "Ops! Algo deu errado. Por favor, tente novamente mais tarde.";
             }
 
             // Fechar declaração
             unset($stmt);
             
         }
      }

        
      

      if(empty($email_err)){
 
          $hash = password_hash($user->password,  PASSWORD_DEFAULT);
           
           $sql = "INSERT INTO register (name, email, password) VALUES(:name, :email, :password)";
           $stmt = $conn->prepare($sql);
          
           $stmt->bindParam(':name', $user->name);
           $stmt->bindParam(':email', $user->email);
           $stmt->bindParam(':password', $hash);
          
           
          
           if($stmt->execute()) {
              $response = ['status' => 1, 'message' => 'Conta criada com sucesso'];
           } else {
              $response = ['status' => 0, 'message' => 'Falha ou criar conta'];
          
           }
           echo json_encode($response , JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
         
           break;
         }
      


}  
?>