angular.module("listaTelefonica").value("config", {
    // Registro de um objeto de constantes
    baseUrl: "http://localhost:3412"
});

angular.module("listaTelefonica").constant("configConst", {
    /*
    Registro de um objeto de constantes
    Caso criado com constant e não value, esse objeto pode ser injeto em uma provider
    */

    baseUrl: "http://localhost:3412"
});