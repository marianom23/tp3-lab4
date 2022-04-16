"use strict";
var Factura = /** @class */ (function () {
    function Factura(letra, numero, recargo, tipoPago, totalItems, totalFinal, fecha) {
        this.detalleFactura = new Array();
        this.letra = letra;
        this.numero = numero;
        this.recargo = recargo;
        this.tipoPago = tipoPago;
        this.totalItems = totalItems;
        this.totalFinal = totalFinal;
        this.fecha = fecha;
    }
    Factura.prototype.getRecargo = function () {
        return this.recargo;
    };
    Factura.prototype.setRecargo = function (recargo) {
        this.recargo = recargo;
    };
    Factura.prototype.getTipoPago = function () {
        return this.tipoPago;
    };
    Factura.prototype.setTipoPago = function (tipoPago) {
        this.tipoPago = tipoPago;
    };
    Factura.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    Factura.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Factura.prototype.getDetalleFactura = function () {
        return this.detalleFactura;
    };
    Factura.prototype.setDetalleFactura = function (detalleFactura) {
        this.detalleFactura = detalleFactura;
    };
    Factura.prototype.calcularTotalItems = function () {
        var detalles = this.getDetalleFactura();
        var subTotalAux = 0;
        detalles.forEach(function (det) {
            subTotalAux += det.getSubTotal();
        });
        this.setTotalItems(subTotalAux);
    };
    Factura.prototype.calcularTotalFinal = function () {
        var totalItems = this.getTotalItems();
        var recargo = this.getRecargo();
        return totalItems + recargo;
    };
    return Factura;
}());
module.exports = Factura;
