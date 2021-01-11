<?php
    require_once '../connect/conexao.php';

    $result = query("SELECT id_cad_serv, servico, categoria, valor, descricao, id_usuario, nome
                        FROM cadastrarprodutos
                        INNER JOIN usuario
                        ON id_usuario = id_card_serv");
    
    while ($linha = mysqli_fetch_assoc($result)){
        $produtos[] = $linha;
    }

    header("Acess-Control-Allow-Origin:*");
    echo json_encode($produtos);
                        
?>