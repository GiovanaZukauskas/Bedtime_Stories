var database = require("../database/config")

function contarVotos() {
    var instrucaoSql = 
        `select nome as Historia, count(fkHistoria) as Contagem from historia join votacao on fkHistoria = idHistoria group by historia order by Contagem desc;`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarTotalVotos(){
    var instrucaoSql = 
    `select count(fkUsuario) as Contagem from votacao;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserirvotos(fkUsuario, fkHistoria){
    var instrucaoSql = 
    `insert into votacao values ('${fkUsuario}', '${fkHistoria}');`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
    

module.exports = {
    contarVotos,
    contarTotalVotos,
    inserirvotos
};


