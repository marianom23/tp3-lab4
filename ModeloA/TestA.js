"use strict";
exports.__esModule = true;
var HojaRuta_1 = require("./HojaRuta");
var Detalle_1 = require("./Detalle");
var Vehiculo_1 = require("./Vehiculo");
var listaHoja = new Array();
var listaDetalle = new Array();
var listaVehiculo = new Array();
var vehiculo1 = new Vehiculo_1.Vehiculo("A232", "Chevrolet", "CorsaClassic", listaHoja);
listaVehiculo.push(vehiculo1);
var hoja1 = new HojaRuta_1.HojaRuta(new Date("2021-02-10"), 1, listaDetalle);
listaHoja.push(hoja1);
var detalle1 = new Detalle_1.Detalle(178, 200, 10, 11, 23, 34);
var detalle2 = new Detalle_1.Detalle(200, 300, 11, 12, 43, 23);
var detalle3 = new Detalle_1.Detalle(300, 457, 12, 13, 34, 54);
listaDetalle.push(detalle1);
listaDetalle.push(detalle2);
listaDetalle.push(detalle3);
for (var _i = 0, listaVehiculo_1 = listaVehiculo; _i < listaVehiculo_1.length; _i++) {
    var vehiculo = listaVehiculo_1[_i];
    console.log("OBTENGO LOS DATOS DEL VEHICULO:");
    console.log("");
    console.log(vehiculo.toString());
    console.log("");
    for (var _a = 0, _b = vehiculo.getListaHoja(); _a < _b.length; _a++) {
        var hoja = _b[_a];
        console.log("OBTENGO LOS DATOS DE LAS HOJAS:");
        console.log("");
        console.log(hoja.toString());
        console.log("");
        for (var _c = 0, _d = hoja.getListaDetalle(); _c < _d.length; _c++) {
            var detalle = _d[_c];
            console.log("OBTENGO LOS DATOS DEL DETALLE:");
            console.log("");
            console.log(detalle.toString());
            console.log("");
        }
    }
}
console.log("OBTENGO USANDO EL METODO TOTAL KM RECORRIDOS X AUTO:");
console.log("");
var totalKm = vehiculo1.calcularTotalKilometrosRecorridos(new Date("2021-02-09"), new Date("2021-02-13"));
console.log("El total de Km recorridos para el vehiculo " + vehiculo1.getModelo() + ": " + totalKm + " km.");
console.log("");
console.log("OBTENGO USANDO EL METODO TOTAL KM RECORRIDOS X HOJA DE RUTA:");
console.log("");
var km = hoja1.calcularTotalKilometros();
console.log("El total de Km recorridos para la hoja de ruta N° " + hoja1.getNumero() + ": " + km + " km.");
console.log("");
