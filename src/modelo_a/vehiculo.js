"use strict";
var Vehiculo = /** @class */ (function () {
    function Vehiculo(patente, marca, modelo) {
        this.hojaRuta = new Array();
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
    }
    Vehiculo.prototype.getHojaRuta = function () {
        return this.hojaRuta;
    };
    Vehiculo.prototype.setHojaRuta = function (hojaRuta) {
        this.hojaRuta = hojaRuta;
    };
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Vehiculo.prototype.calcularTotalKilometrosRecorridos = function (fechaDesde, fechaHasta) {
        var arregloHojaRutas = this.getHojaRuta();
        var totalKmRecorridos = 0;
        var getKm = 0;
        for (var i = 0; i < arregloHojaRutas.length; i++) {
            if ((arregloHojaRutas[i].getFecha() >= fechaDesde) && (arregloHojaRutas[i].getFecha() <= fechaHasta)) {
                getKm = arregloHojaRutas[i].calcularTotalKilometros();
                totalKmRecorridos += getKm;
                // console.log("Entró al bucle FOR: [",i,"]")
                // console.log("Total Km Recorridos:", totalKmRecorridos)
                // console.log("Fecha Desde:", fechaDesde)
                // console.log("Fecha Hasta:" ,fechaHasta)
                // console.log("Fecha Test:", arregloHojaRutas[i].getFecha())
                // console.log("")
            }
        }
        console.log("######################################");
        console.log("######################################");
        console.log("Total total total:", totalKmRecorridos, "Total total total:");
        console.log("######################################");
        console.log("######################################");
        return totalKmRecorridos;
    };
    return Vehiculo;
}());
module.exports = Vehiculo;
