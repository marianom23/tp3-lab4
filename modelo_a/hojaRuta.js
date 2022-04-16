"use strict";
// import {Vehiculo} from './vehiculo';
// import {Detalle} from './detalle';
var HojaRuta = /** @class */ (function () {
    function HojaRuta(fecha, numero, vehiculo) {
        this.arregloDetalles = new Array();
        this.fecha = fecha;
        this.numero = numero;
        this.vehiculo = vehiculo;
    }
    HojaRuta.prototype.getArregloDetalle = function () {
        return this.arregloDetalles;
    };
    HojaRuta.prototype.setArregloDetalle = function (arregloDetalle) {
        this.arregloDetalles = arregloDetalle;
    };
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
    HojaRuta.prototype.salida = function (kmSalida, kmRegreso) {
        return kmRegreso - kmSalida;
    };
    HojaRuta.prototype.calcularTotalKilometros = function () {
        var detalles = this.getArregloDetalle();
        var kmRegresoAux = 0;
        var kmSalidaAux = 0;
        //console.log("||||||||||| calcularTotalKilometros(); :: ./hojaRuta.ts  ||||||||||||");
        for (var i = 0; i < detalles.length; i++) {
            // console.log("Km Regreso[", i ,"]:", detalles[i].getKmRegreso())
            // console.log("Km Salida[", i ,"]:", detalles[i].getKmSalida())
            kmRegresoAux += detalles[i].getKmRegreso();
            kmSalidaAux += detalles[i].getKmSalida();
        }
        var totalKilometros = kmRegresoAux - kmSalidaAux;
        // console.log("############### ºººººº ###################");
        // console.log("KM Regreso:", kmRegresoAux ,"\nKm Salida:", kmSalidaAux);
        // console.log("############### ºººººº ###################");
        return totalKilometros;
    };
    return HojaRuta;
}());
module.exports = HojaRuta;
//module.exports = HojaRuta;
