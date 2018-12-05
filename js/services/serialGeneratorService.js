app.provider("serialGenerator", function(configConst) {
    /*
    Serviços do tipo provider é o único que pode ser configurado de fora
    Equivalencia do serviço factory dentro do $get
    */

    var _length = 5;

    this.getLength = function() {
        return _length;
    }

    this.setLength = function(length) {
        _length = length;
    }

    this.$get = function() {
        return {
            generate: function() {
                var serial = "";
                while (serial.length < _length) {
                    serial += String.fromCharCode(Math.floor(Math.random() * 62) + 32);
                }
                return serial; 
            }

        };
    };
});