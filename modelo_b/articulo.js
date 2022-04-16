"use strict";
var Articulo = /** @class */ (function () {
    function Articulo(codigo, denominacion, precio, unidadMedida) {
        this.detalleFactura = new Array();
        this.codigo = codigo;
        this.denominacion = denominacion;
        this.precio = precio;
        this.unidadMedida = unidadMedida;
    }
    Articulo.prototype.getDetalleFactura = function () {
        return this.detalleFactura;
    };
    Articulo.prototype.setDetalleFactura = function (detalleFactura) {
        this.detalleFactura = detalleFactura;
    };
    Articulo.prototype.getPrecio = function () {
        return this.precio;
    };
    Articulo.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Articulo.prototype.getCodigo = function () {
        return this.codigo;
    };
    Articulo.prototype.setCodigo = function (codigo) {
        this.codigo = codigo;
    };
    Articulo.prototype.getDenominacion = function () {
        return this.denominacion;
    };
    Articulo.prototype.setDenominacion = function (denominacion) {
        this.denominacion = denominacion;
    };
    Articulo.prototype.getMedida = function () {
        return this.unidadMedida;
    };
    Articulo.prototype.setMedida = function (unidadMedida) {
        this.unidadMedida = unidadMedida;
    };
    return Articulo;
}());
module.exports = Articulo;
