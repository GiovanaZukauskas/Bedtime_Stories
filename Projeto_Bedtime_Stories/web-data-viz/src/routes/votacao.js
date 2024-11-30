var express = require("express");
var router = express.Router();

var votacaoController = require("../controllers/votacaoController");


router.get("/contagem", function (req, res) {
    votacaoController.contarVotos(req, res);
});

router.get("/contarvotos", function (req, res) {
    votacaoController.contarTotalVotos(req, res);
});

router.post("/inserirvotos", function (req, res) {
    votacaoController.inserirvotos(req, res);
});

module.exports = router;