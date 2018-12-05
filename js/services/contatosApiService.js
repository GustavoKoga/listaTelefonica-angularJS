// Função fábrica
app.factory("contatosAPI", function($http, config) {
    /*
    Variável privada a function (por isso inicia-se com _) 
    que retorna o acesso httpGET do backend à quem acesse
    */

    var _getContatos = function() {
        return $http.get(config.baseUrl + "/contatos");
    };

    var _saveContatos = function (contato) {
        return $http.post(config.baseUrl + "/contatos", contato);
    }

    return {
        getContatos: _getContatos,
        saveContato: _saveContatos
    };
});