"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(numero, razonSocial, cuit, listaFactura) {
        this.listaFactura = new Array();
        this.numero = numero;
        this.razonSocial = razonSocial;
        this.cuit = cuit;
        this.listaFactura = listaFactura;
    }
    Cliente.prototype.getNumero = function () {
        return this.numero;
    };
    Cliente.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Cliente.prototype.getRazonSocial = function () {
        return this.razonSocial;
    };
    Cliente.prototype.setRazonSocial = function (razonSocial) {
        this.razonSocial = razonSocial;
    };
    Cliente.prototype.getCuit = function () {
        return this.cuit;
    };
    Cliente.prototype.setCuit = function (cuit) {
        this.cuit = cuit;
    };
    Cliente.prototype.getListaFactura = function () {
        return this.listaFactura;
    };
    Cliente.prototype.setListaFactura = function (listaFactura) {
        this.listaFactura = listaFactura;
    };
    Cliente.prototype.toString = function () {
        return "\nNumero: " + this.numero + "\nRazon Social: " + this.razonSocial + "\nCuit: " + this.cuit;
    };
    Cliente.prototype.totalFacturadoXTipoPago = function (tipoPago) {
        var total = 0;
        for (var _i = 0, _a = this.listaFactura; _i < _a.length; _i++) {
            var factura = _a[_i];
            if (tipoPago != null) {
                if (factura.getTipoPago() == tipoPago) {
                    total += factura.calcularTotalFinal();
                }
            }
            else {
                total += factura.calcularTotalFinal();
            }
        }
        return total;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
