"use strict";
var Cliente = /** @class */ (function () {
    function Cliente(numero, razonSocial, cuit) {
        this.facturas = new Array();
        this.numero = numero;
        this.razonSocial = razonSocial;
        this.cuit = cuit;
    }
    Cliente.prototype.getFactura = function () {
        return this.facturas;
    };
    Cliente.prototype.setFactura = function (facturas) {
        this.facturas = facturas;
    };
    Cliente.prototype.totalFacturadoXTipoPago = function (tipoPago) {
        if ((tipoPago !== "E") && (tipoPago !== "TD") && tipoPago !== "TC" && tipoPago !== "CC" && tipoPago !== "TR") {
            console.log("Tipo de pago inválido");
            return;
        }
        var total = 0;
        var facturas = this.getFactura();
        facturas.forEach(function (fact) {
            total += fact.getTotalItems();
        });
    };
    return Cliente;
}());
module.exports = Cliente;
