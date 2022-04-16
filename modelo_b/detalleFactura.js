"use strict";
var DetalleFactura = /** @class */ (function () {
    function DetalleFactura(cantidad, subTotal, articulo, factura) {
        this.cantidad = cantidad;
        this.subTotal = subTotal;
        this.articulo = articulo;
        this.factura = factura;
    }
    DetalleFactura.prototype.getArticulo = function () {
        return this.articulo;
    };
    DetalleFactura.prototype.setArticulo = function (articulo) {
        this.articulo = articulo;
    };
    DetalleFactura.prototype.getFactura = function () {
        return this.factura;
    };
    DetalleFactura.prototype.setFactura = function (factura) {
        this.factura = factura;
    };
    DetalleFactura.prototype.getCantidad = function () {
        return this.cantidad;
    };
    DetalleFactura.prototype.setCantidad = function (cantidad) {
        this.cantidad = cantidad;
    };
    DetalleFactura.prototype.getSubTotal = function () {
        return this.subTotal;
    };
    DetalleFactura.prototype.setSubTotal = function (subTotal) {
        this.subTotal = subTotal;
    };
    DetalleFactura.prototype.calcularSubTotal = function () {
        this.setSubTotal(this.getCantidad() * this.articulo.getPrecio());
    };
    return DetalleFactura;
}());
module.exports = DetalleFactura;
