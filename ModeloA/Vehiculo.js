"use strict";
exports.__esModule = true;
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(patente, marca, modelo, listaHoja) {
        this.listaHoja = new Array();
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.listaHoja = listaHoja;
    }
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
        this.patente = modelo;
    };
    Vehiculo.prototype.getListaHoja = function () {
        return this.listaHoja;
    };
    Vehiculo.prototype.setListaHoja = function (listaHoja) {
        this.listaHoja = listaHoja;
    };
    Vehiculo.prototype.toString = function () {
        return "\nPatente: " + this.patente + "\nMarca: " + this.marca + "\nModelo: " + this.modelo;
    };
    Vehiculo.prototype.calcularTotalKilometrosRecorridos = function (fechaDesde, fechaHasta) {
        var totalKm = 0;
        for (var _i = 0, _a = this.listaHoja; _i < _a.length; _i++) {
            var hoja = _a[_i];
            if (hoja.getFecha() >= fechaDesde && hoja.getFecha() <= fechaHasta) {
                totalKm += hoja.calcularTotalKilometros();
            }
        }
        return totalKm;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
