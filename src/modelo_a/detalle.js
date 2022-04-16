"use strict";
//import {HojaRuta} from './hojaRuta'
var Detalle = /** @class */ (function () {
    function Detalle(kmSalida, kmRegreso, horaSalida, horaRegreso, minutoSalida, minutoRegreso, hojaRuta) {
        this.kmSalida = kmSalida;
        this.kmRegreso = kmRegreso;
        this.horaSalida = horaSalida;
        this.horaRegreso = horaRegreso;
        this.minutoSalida = minutoSalida;
        this.minutoRegreso = minutoRegreso;
        this.hojaRuta = hojaRuta;
    }
    Detalle.prototype.getKmSalida = function () {
        return this.kmSalida;
    };
    Detalle.prototype.getKmRegreso = function () {
        return this.kmRegreso;
    };
    Detalle.prototype.getHoraSalida = function () {
        return this.horaSalida;
    };
    Detalle.prototype.getHoraRegreso = function () {
        return this.horaRegreso;
    };
    Detalle.prototype.getMinutoSalida = function () {
        return this.minutoSalida;
    };
    Detalle.prototype.getMinutoRegreso = function () {
        return this.minutoRegreso;
    };
    Detalle.prototype.setKmSalida = function (kmSalida) {
        this.kmSalida = kmSalida;
    };
    Detalle.prototype.setKmRegreso = function (kmRegreso) {
        this.kmRegreso = kmRegreso;
    };
    Detalle.prototype.setHoraSalida = function (kmRegreso) {
        this.kmRegreso = kmRegreso;
    };
    Detalle.prototype.setHoraRegreso = function (horaRegreso) {
        this.horaRegreso = horaRegreso;
    };
    Detalle.prototype.setMinutoSalida = function (horaSalida) {
        this.horaSalida = horaSalida;
    };
    Detalle.prototype.setMinutoRegreso = function (minutoRegreso) {
        this.minutoRegreso = minutoRegreso;
    };
    Detalle.prototype.setHojaRuta = function (hojaRuta) {
        this.hojaRuta = hojaRuta;
    };
    Detalle.prototype.getHojaRuta = function () {
        return this.hojaRuta;
    };
    return Detalle;
}());
module.exports = Detalle;
//module.exports = Detalle
