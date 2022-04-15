"use strict";
exports.__esModule = true;
exports.Detalle = void 0;
var Detalle = /** @class */ (function () {
    function Detalle(kmSalida, kmSRegreso, horaSalida, horaRegreso, minutoSalida, minutoRegreso, hojaRuta) {
        this.kmSalida = kmSalida;
        this.kmSRegreso = kmSRegreso;
        this.horaSalida = horaSalida;
        this.horaRegreso = horaRegreso;
        this.minutoSalida = minutoSalida;
        this.minutoRegreso = minutoRegreso;
        this.hojaRuta = hojaRuta;
    }
    Detalle.prototype.getKmSalida = function () {
        return this.kmSalida;
    };
    Detalle.prototype.setKmSalida = function (kmSalida) {
        this.kmSalida = kmSalida;
    };
    Detalle.prototype.getKmRegreso = function () {
        return this.kmSRegreso;
    };
    Detalle.prototype.setKmRegreso = function (kmSRegreso) {
        this.kmSRegreso = kmSRegreso;
    };
    Detalle.prototype.getHoraSalida = function () {
        return this.horaSalida;
    };
    Detalle.prototype.setHoraSalida = function (horaSalida) {
        this.horaSalida = horaSalida;
    };
    Detalle.prototype.getHoraRegreso = function () {
        return this.horaRegreso;
    };
    Detalle.prototype.setHoraRegreso = function (horaRegreso) {
        this.horaRegreso = horaRegreso;
    };
    Detalle.prototype.getMinutoSalida = function () {
        return this.minutoSalida;
    };
    Detalle.prototype.setMinutoSalida = function (minutoSalida) {
        this.minutoSalida = minutoSalida;
    };
    Detalle.prototype.getMinutoRegreso = function () {
        return this.minutoRegreso;
    };
    Detalle.prototype.setMinutoRegreso = function (minutoRegreso) {
        this.minutoRegreso = minutoRegreso;
    };
    Detalle.prototype.getHojaRuta = function () {
        return this.hojaRuta;
    };
    Detalle.prototype.setHojaRuta = function (hojaRuta) {
        this.hojaRuta = hojaRuta;
    };
    Detalle.prototype.toString = function () {
        return "\nKm Salida: " + this.kmSalida + "\nKm Regreso: " + this.kmSRegreso +
            "\nHora Salida: " + this.horaSalida + "\nHora Regreso: " + this.horaRegreso +
            "\nMinuto Salida: " + this.minutoSalida + "\nMinuto Regreso: " + this.minutoRegreso;
    };
    return Detalle;
}());
exports.Detalle = Detalle;
