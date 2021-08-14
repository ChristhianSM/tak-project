<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "clientes";

    // Create conexion
    // $conexion = mysqli_connect('localhost', 'root', '', 'clientes') or die('Error en la conexión con el servidor');
    $conexion = mysqli_connect($servername, $username, $password, $dbname) or die('Error en la conexión con el servidor');

    $nombre = validar_alfabetico($_POST["nombre"]) ? $_POST["nombre"] : null;
    $email = validar_email($_POST["email"]) ? $_POST["email"] : null;
    $telefono = validar_numerico($_POST["telefono"]) ? $_POST["telefono"] : null;
    $mensaje = validar_alfanumerico($_POST["mensaje"]) ? $_POST["mensaje"] : null;
    $temas = $_POST["tema"];

    //sanitización
    /*function test_input($data, $mysqli) {
        $data = trim($data);
        $data = $mysqli->real_escape_string($data);
        return $data;
    }*/

    //validación
    function validar_email($email){
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
             return $email;
            }
     }

    function validar_numerico($numero){
        if (preg_match("/^[+0-9]*$/",$numero)) {
            return $numero;
        }
    }

    function validar_alfanumerico($alfanumerico){
        if (preg_match("/^[a-zA-Z0-9 ]*$/",$alfanumerico)) {
            return $alfanumerico;
        }
    }

    function validar_alfabetico($alfabetico){
        if (preg_match("/^[a-zA-Z ]*$/",$alfabetico)) {
            return $alfabetico;
        }
    }

    // tengo dificultad en como implementar esto
    // if(is_null($nombre) or is_null($email){
    //     header('Location: http://www.example.com/contacto?message="Hubo un error"'); // $_SERVER['HTTP_REFERER']
    // })


    // $servername = "localhost";
    // $username = "root";
    // $password = "";
    // $dbname = "clientes";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO leads (nombre, email,telefono,mensaje,temas)
    VALUES ('".$nombre."', '".$email."','".$telefono."','".$mensaje."','".implode(',',$temas)."')";

    if ($conn->query($sql) === TRUE) {
        // echo "New record created successfully";
        header("Location: http://localhost/tak-project/");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
?>