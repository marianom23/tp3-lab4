"use strict";
exports.__esModule = true;
exports.DetalleFactura = void 0;
var DetalleFactura = /** @class */ (function () {
    function DetalleFactura(cantidad, subTotal, factura, articulo) {
        this.cantidad = cantidad;
        this.subTotal = subTotal;
        this.factura = factura;
        this.articulo = articulo;
    }
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
    DetalleFactura.prototype.getFactura = function () {
        return this.factura;
    };
    DetalleFactura.prototype.setFactura = function (factura) {
        this.factura = factura;
    };
    DetalleFactura.prototype.getArticulo = function () {
        return this.articulo;
    };
    DetalleFactura.prototype.setArticulo = function (articulo) {
        this.articulo = articulo;
    };
    DetalleFactura.prototype.toString = function () {
        return "\nCantidad: " + this.cantidad + "\nSubTotal: " + this.subTotal;
    };
    DetalleFactura.prototype.calcularSubTotal = function () {
        this.subTotal = this.cantidad * this.articulo.getPrecio();
        return this.subTotal;
    };
    return DetalleFactura;
}());
exports.DetalleFactura = DetalleFactura;
