<?php
    require_once '../connect/conexao.php';

    $result = query("SELECT id_cad_pro, produto, categoria, valor, descricao, id_usuario, nome
                        FROM cadastrarprodutos
                        INNER JOIN usuario 
                        ON id_usuario = id_cad_pro;");

    while ($linha = mysqli_fetch_assoc($result)){
        $produtos[] = $linha;
    }

    header("Access-Control-Allow-Origin:*");
    echo json_encode($produtos);
?>