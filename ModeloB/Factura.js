"use strict";
exports.__esModule = true;
exports.Factura = void 0;
var Factura = /** @class */ (function () {
    function Factura(letra, numero, recargo, tipoPago, totalItems, totalFinal, fecha, cliente, listaDetalle) {
        this.listaDetalle = new Array();
        this.letra = letra;
        this.numero = numero;
        this.recargo = recargo;
        this.tipoPago = tipoPago;
        this.totalItems = totalItems;
        this.totalFinal = totalFinal;
        this.fecha = fecha;
        this.cliente = cliente;
        this.listaDetalle = listaDetalle;
    }
    Factura.prototype.getLetra = function () {
        return this.letra;
    };
    Factura.prototype.setLetra = function (letra) {
        this.letra = letra;
    };
    Factura.prototype.getNumero = function () {
        return this.numero;
    };
    Factura.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
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
    Factura.prototype.getTotalFinal = function () {
        return this.totalFinal;
    };
    Factura.prototype.setTotalFinal = function (totalFinal) {
        this.totalFinal = totalFinal;
    };
    Factura.prototype.getFecha = function () {
        return this.fecha;
    };
    Factura.prototype.setFecha = function (fecha) {
        this.fecha = fecha;
    };
    Factura.prototype.getCliente = function () {
        return this.cliente;
    };
    Factura.prototype.setCliente = function (cliente) {
        this.cliente = cliente;
    };
    Factura.prototype.getListaDetalle = function () {
        return this.listaDetalle;
    };
    Factura.prototype.setListaDetalle = function (listaDetalle) {
        this.listaDetalle = listaDetalle;
    };
    Factura.prototype.toString = function () {
        return "\nLetra: " + this.letra + "\nNumero: " + this.numero + "\nRecargo: " + this.recargo +
            "\nTipo de Pago: " + this.tipoPago + "\nTotal Items: " + this.totalItems +
            "\nTotal Final: " + this.totalFinal + "\nFecha: " + this.fecha;
    };
    Factura.prototype.calcularTotalItems = function () {
        for (var _i = 0, _a = this.listaDetalle; _i < _a.length; _i++) {
            var detalle = _a[_i];
            this.totalItems += detalle.calcularSubTotal();
        }
        return this.totalItems;
    };
    Factura.prototype.calcularTotalFinal = function () {
        this.totalFinal = this.totalItems + this.recargo;
        return this.totalFinal;
    };
    return Factura;
}());
exports.Factura = Factura;
