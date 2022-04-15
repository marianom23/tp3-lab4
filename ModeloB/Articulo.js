"use strict";
exports.__esModule = true;
exports.Articulo = void 0;
var Articulo = /** @class */ (function () {
    function Articulo(codigo, denominacion, precio, unidadMedida, listaDetalle) {
        this.listaDetalle = new Array();
        this.codigo = codigo;
        this.denominacion = denominacion;
        this.precio = precio;
        this.unidadMedida = unidadMedida;
        this.listaDetalle = listaDetalle;
    }
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
    Articulo.prototype.getPrecio = function () {
        return this.precio;
    };
    Articulo.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Articulo.prototype.getUnidadMedida = function () {
        return this.unidadMedida;
    };
    Articulo.prototype.setUnidadMedida = function (unidadMedida) {
        this.unidadMedida = unidadMedida;
    };
    Articulo.prototype.getListaDetalle = function () {
        return this.listaDetalle;
    };
    Articulo.prototype.setListaDetalle = function (listaDetalle) {
        this.listaDetalle = listaDetalle;
    };
    Articulo.prototype.toString = function () {
        return "\nCodigo: " + this.codigo + "\nDenominacion: " + this.denominacion + "\nPrecio: " + this.precio +
            "\nUnidad Medida: " + this.unidadMedida;
    };
    return Articulo;
}());
exports.Articulo = Articulo;
