app.directive("uiDate", function($filter) {
    return {
        require: "ngModel",
        link: function(scope, element, attrs, ctrl) {
            var _formatDate = function(date) {
                date = date.replace(/[^0-9]+/g, "");
                if (date.length > 2) {
                    date = date.substring(0,2) + '/' + date.substring(2);
                }
                if (date.length > 5) {
                    date = date.substring(0,5) + '/' + date.substring(5, 9);
                }

                return date;
            }

            // As funções são invocadas apenas dependendo de uma ação do usuário
            element.bind("keyup", function() {
                // Setar na view, o valor passado
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                // Renderizar a tela
                ctrl.$render();
            });

            ctrl.$parsers.push(function(value) {
                // O item só retorna ao escopo quando o return desta função é executado
                // interceptando o valor para não ir ao escopo indevidamente
                if (value.length === 10) {
                    var dateArray = value.split('/');
                    return new Date(dateArray[2], dateArray[1]-1, dateArray[0]); 
                }

            });
            // Formatação dos valores
            ctrl.$formatter.push(function(value) {
                $filter("date")(value, "dd/MM/yyyy");
            });
        }
    }
});