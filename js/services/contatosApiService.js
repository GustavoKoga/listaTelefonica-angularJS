// Função fábrica
angular.module("listaTelefonica").factory("contatosAPI", function($http) {
    /*
    Variável privada a function (por isso inicia-se com _) 
    que retorna o acesso httpGET do backend à quem acesse
    */

    var _getContatos = function() {
        return $http.get("http://localhost:3412/contatos");
    };

    var _saveContatos = function (contato) {
        return $http.post("http://localhost:3412/contatos", contato);
    }


    return {
        getContatos: _getContatos,
        saveContato: _saveContatos
    };
});