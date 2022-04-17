<?php
  header('Content-Type: application/json');
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: *');
  date_default_timezone_set('America/Bahia');
  require './vendor/autoload.php';

  if(array_key_exists('url', $_GET)) {
    $url = explode('/', $_GET['url']);

    if ($url[0] != 'api') {
      http_response_code(404);
      echo json_encode(array('status' => 'error', 'data' => 'Api not found'));
      exit;
    }
    array_shift($url);
    if ($url == null) {
      http_response_code(404);
      echo json_encode(array('status' => 'error', 'data' => 'Service not typed'));
      exit;
    }
    $service = 'App\Services\\'.ucfirst($url[0]).'Service';
    array_shift($url);;
    $method = strtolower($_SERVER['REQUEST_METHOD']);

    if (!class_exists($service)){
      http_response_code(404);
      echo json_encode(array('status' => 'error', 'data' => 'Service not found'));
      exit;
    }
    try {
      $response = call_user_func_array(array(new $service, $method), $url);
      http_response_code(200);
      echo json_encode(array('status' => 'success', 'data' => $response));
      exit;
    } catch (\Exception $e){
      http_response_code(404);
      echo json_encode(array('status' => 'error', 'data' => $e->getMessage()), JSON_UNESCAPED_UNICODE);
      exit;
    }
  } else {
    echo "Url not found";
  }
?>