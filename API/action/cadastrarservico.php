<?php

header("Access-Control-Allow-Origin:*");
    require_once '../connect/conexao.php';

    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $produto = $_POST['produto'];
        $categoria = $_POST['categoria'];
        $imagem = $_POST['imagem'];
        $valor = $_POST['valor'];
        $descricao = $_POST['descricao'];

        $sql = "INSERT INTO cadastrarservicos VALUES 
        (null, '$produto', '$categoria', '$imagem', '$valor', '$descrica') ";
        nonquery($sql);
        echo json_encode(array("msg" => "Método POST Efetuado"));

    } else {
        echo "conectado!";
    }

?>