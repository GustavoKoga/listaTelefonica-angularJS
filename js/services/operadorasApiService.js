// Função fábrica
angular.module("listaTelefonica").factory("operadorasAPI", function($http) {
    /*
    Variável privada a function (por isso inicia-se com _) 
    que retorna o acesso httpGET do backend à quem acesse
    */

    var _getOperadoras = function() {
        return $http.get("http://localhost:3412/operadoras");
    }

    return {
        getOperadoras: _getOperadoras
    };
});