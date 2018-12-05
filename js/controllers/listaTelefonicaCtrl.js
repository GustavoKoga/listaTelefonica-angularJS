app.controller("listaTelefonicaCtrl", function ($scope, $http) {
    $scope.app = "Lista telefonica";
    // Lista de contatos exibidos
    $scope.contatos = [];
    // Carregar contatos da api
    var carregarContatos = function() {
        // A execução da httpGET retornará uma promisse de execução
        $http.get("http://localhost:3412/contatos").then(function(response) {
            // Promisse de success
            $scope.contatos = response.data;
        }, function(response) {
            // Promisse de error
            console.log('Error: ' + response.data);
        });
    };

    // Lista de operadoras
    $scope.operadoras = [];
    // Carregar operadoras da api
    var carregarOperadoras = function() {
        // A execução da httpGET retornará uma promisse de execução
        $http.get("http://localhost:3412/operadoras").then(function(response) {
            // Promisse de success
            $scope.operadoras = response.data;
        }, function(response) {
            // Promisse de error
            console.log('Error: ' + data);
        });
    };

    $scope.adicionarContato = function(contato) {
        contato.data = new Date();
        $http.post("http://localhost:3412/contatos", contato).then(function(data) {
            // Promisse de success
            console.log(data.config.data);
            // Excluindo o obj de contato
            delete $scope.contato;
            // Seta o form como pristine novamente
            $scope.contatoForm.$setPristine();
            // Recarregar lista de contatos
            carregarContatos();
            // Inserir o contato cadastrado na lista
            // $scope.contatos.push(data.config.data);

        }, function(data) {
            // Promisse de error
            console.log('Error: ' + data);
        });
    };
    $scope.apagarContatos = function(contatos) {
        $scope.contatos = contatos.filter(function(contato) {
            if (!contato.selecionado) {
                return contato;
            }
        });
    };
    $scope.isContatoSelecionado = function(contatos) {
        return contatos.some(function(contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function(campo) {
        $scope.criterioOrdenacao = campo;
        $scope.criterioOrdenacaoDirecao = !$scope.criterioOrdenacaoDirecao;
    };

    carregarContatos();
    carregarOperadoras();
});