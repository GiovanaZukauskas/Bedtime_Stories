var votacaoModel = require("../models/votacaoModel");

function contarVotos(req, res) {
    votacaoModel.contarVotos().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function contarTotalVotos(req, res) {
    votacaoModel.contarTotalVotos().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function inserirvotos(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkHistoria = req.body.fkHistoriaServer;
    var fkUsuario = req.body.fkUsuarioServer;

    

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        votacaoModel.inserirvotos(fkUsuario, fkHistoria)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }








module.exports = {
    contarVotos,
    contarTotalVotos,
    inserirvotos
}