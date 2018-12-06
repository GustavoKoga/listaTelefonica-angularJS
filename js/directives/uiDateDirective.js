app.directive("uiDate", function() {
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
                console.log(ctrl.$viewValue);
            });
        }
    }
});