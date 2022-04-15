"use strict";
exports.__esModule = true;
exports.HojaRuta = void 0;
var HojaRuta = /** @class */ (function () {
    function HojaRuta(fecha, numero, listaDetalle, vehiculo) {
        this.listaDetalle = new Array();
        this.fecha = fecha;
        this.numero = numero;
        this.listaDetalle = listaDetalle;
        this.vehiculo = vehiculo;
    }
    HojaRuta.prototype.getFecha = function () {
        return this.fecha;
    };
    HojaRuta.prototype.setFecha = function (fecha) {
        this.fecha = fecha;
    };
    HojaRuta.prototype.getNumero = function () {
        return this.numero;
    };
    HojaRuta.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    HojaRuta.prototype.getVehiculo = function () {
        return this.vehiculo;
    };
    HojaRuta.prototype.setVehiculo = function (vehiculo) {
        this.vehiculo = vehiculo;
    };
    HojaRuta.prototype.getListaDetalle = function () {
        return this.listaDetalle;
    };
    HojaRuta.prototype.setListaDetalle = function (listaDetalle) {
        this.listaDetalle = listaDetalle;
    };
    HojaRuta.prototype.toString = function () {
        return "\nFecha: " + this.fecha + "\nNumero: " + this.numero;
    };
    HojaRuta.prototype.calcularTotalKilometros = function () {
        var totalKm = 0;
        for (var _i = 0, _a = this.listaDetalle; _i < _a.length; _i++) {
            var item = _a[_i];
            totalKm += (item.getKmRegreso() - item.getKmSalida());
        }
        return totalKm;
    };
    return HojaRuta;
}());
exports.HojaRuta = HojaRuta;
