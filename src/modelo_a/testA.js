"use strict";
exports.__esModule = true;
var Detalle = require("./detalle");
var Vehiculo = require("./vehiculo");
var HojaRuta = require("./hojaRuta");
var fechaUno = new Date("2019-07-04");
var fechaDos = new Date("2019-07-04");
var fechaTres = new Date("2019-07-04");
var vehiculo = new Vehiculo("AAA123", "Fiat", "Palio");
//console.log("Vehiculo:", vehiculo)
var hojaRuta = new HojaRuta(fechaUno, 100, vehiculo);
var hojaRuta2 = new HojaRuta(fechaDos, 200, vehiculo);
var hojaRuta3 = new HojaRuta(fechaTres, 300, vehiculo);
//console.log("Hoja Ruta:", hojaRuta)
var arregloHojaRuta = new Array();
arregloHojaRuta.push(hojaRuta);
arregloHojaRuta.push(hojaRuta2);
arregloHojaRuta.push(hojaRuta3);
vehiculo.setHojaRuta(arregloHojaRuta);
var detalle1_0 = new Detalle(10, 20, 30, 40, 50, 60, hojaRuta);
var detalle1_2 = new Detalle(10, 20, 30, 40, 50, 60, hojaRuta);
var detalle1_3 = new Detalle(10, 100, 30, 40, 50, 60, hojaRuta);
var arregloDetalleMain = new Array();
arregloDetalleMain.push(detalle1_0);
arregloDetalleMain.push(detalle1_2);
arregloDetalleMain.push(detalle1_3);
hojaRuta.setArregloDetalle(arregloDetalleMain);
var detalle2_0 = new Detalle(10, 60, 30, 40, 50, 60, hojaRuta2);
var detalle2_2 = new Detalle(10, 60, 30, 40, 50, 60, hojaRuta2);
var detalle2_3 = new Detalle(10, 60, 30, 40, 50, 60, hojaRuta2);
var arregloDetalleMain2 = new Array();
arregloDetalleMain2.push(detalle2_0);
arregloDetalleMain2.push(detalle2_2);
arregloDetalleMain2.push(detalle2_3);
hojaRuta2.setArregloDetalle(arregloDetalleMain2);
// Este es el resultado del ejercicio 2 :: Return: total de KM realizados.
var resultadoFinal2 = hojaRuta2.calcularTotalKilometros();
console.log(" |||||| Hoja Ruta [ 2 ] ||||||||");
console.log("RESULTADO FINAL:", resultadoFinal2);
var detalle3_0 = new Detalle(10, 20, 30, 40, 50, 60, hojaRuta3);
var detalle3_2 = new Detalle(10, 20, 30, 40, 50, 60, hojaRuta3);
var detalle3_3 = new Detalle(10, 20, 30, 40, 50, 60, hojaRuta3);
var arregloDetalleMain3 = new Array();
arregloDetalleMain3.push(detalle3_0);
arregloDetalleMain3.push(detalle3_2);
arregloDetalleMain3.push(detalle3_3);
hojaRuta3.setArregloDetalle(arregloDetalleMain3);
// Este es el resultado del ejercicio 2 :: Return: total de KM realizados.
var resultadoFinal3 = hojaRuta3.calcularTotalKilometros();
console.log(" |||||| Hoja Ruta [ 3 ] ||||||||");
console.log("RESULTADO FINAL:", resultadoFinal3);
// Este es el resultado del ejercicio 2 :: Return: total de KM realizados.
var resultadoFinal = hojaRuta.calcularTotalKilometros();
// console.log(" |||||| Hoja Ruta [ 1 ] ||||||||")
// console.log("Km Hoja de Ruta ::",resultadoFinal)
var fechaDesde = new Date("2010-07-04");
var fechaHasta = new Date("2020-07-04");
console.log("fechaDesde:", fechaDesde);
console.log("fechaHasta:", fechaHasta);
var resultadoFinalEntreDosFechas = vehiculo.calcularTotalKilometrosRecorridos(fechaDesde, fechaHasta);
console.log(" |||||| Km entre fechas", fechaDesde, " || ", fechaHasta, "||||||||");
console.log("Km totales ::", resultadoFinalEntreDosFechas);
