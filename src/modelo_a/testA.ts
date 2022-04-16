import Detalle = require('./detalle')
import Vehiculo = require('./vehiculo')
import HojaRuta = require('./hojaRuta')

let fechaUno:Date = new Date("2019-07-04");
let fechaDos:Date = new Date("2019-07-04");
let fechaTres:Date = new Date("2019-07-04");
let vehiculo = new Vehiculo("AAA123", "Fiat", "Palio");
//console.log("Vehiculo:", vehiculo)

let hojaRuta = new HojaRuta(fechaUno,100,vehiculo);
let hojaRuta2 = new HojaRuta(fechaDos,200,vehiculo);
let hojaRuta3 = new HojaRuta(fechaTres,300,vehiculo);
//console.log("Hoja Ruta:", hojaRuta)
let arregloHojaRuta: HojaRuta[] = new Array<HojaRuta>();
arregloHojaRuta.push(hojaRuta)
arregloHojaRuta.push(hojaRuta2)
arregloHojaRuta.push(hojaRuta3)
vehiculo.setHojaRuta(arregloHojaRuta)

let detalle1_0 = new Detalle(10,20,30,40,50,60,hojaRuta);
let detalle1_2 = new Detalle(10,20,30,40,50,60,hojaRuta);
let detalle1_3 = new Detalle(10,100,30,40,50,60,hojaRuta);
let arregloDetalleMain: Detalle[] = new Array<Detalle>();
arregloDetalleMain.push(detalle1_0);
arregloDetalleMain.push(detalle1_2);
arregloDetalleMain.push(detalle1_3);
hojaRuta.setArregloDetalle(arregloDetalleMain);


let detalle2_0 = new Detalle(10,60,30,40,50,60,hojaRuta2);
let detalle2_2 = new Detalle(10,60,30,40,50,60,hojaRuta2);
let detalle2_3 = new Detalle(10,60,30,40,50,60,hojaRuta2);
let arregloDetalleMain2: Detalle[] = new Array<Detalle>();
arregloDetalleMain2.push(detalle2_0);
arregloDetalleMain2.push(detalle2_2);
arregloDetalleMain2.push(detalle2_3);
hojaRuta2.setArregloDetalle(arregloDetalleMain2);
// Este es el resultado del ejercicio 2 :: Return: total de KM realizados.
let resultadoFinal2 = hojaRuta2.calcularTotalKilometros();
console.log(" |||||| Hoja Ruta [ 2 ] ||||||||")
console.log("RESULTADO FINAL:",resultadoFinal2)

let detalle3_0 = new Detalle(10,20,30,40,50,60,hojaRuta3);
let detalle3_2 = new Detalle(10,20,30,40,50,60,hojaRuta3);
let detalle3_3 = new Detalle(10,20,30,40,50,60,hojaRuta3);
let arregloDetalleMain3: Detalle[] = new Array<Detalle>();
arregloDetalleMain3.push(detalle3_0);
arregloDetalleMain3.push(detalle3_2);
arregloDetalleMain3.push(detalle3_3);
hojaRuta3.setArregloDetalle(arregloDetalleMain3);
// Este es el resultado del ejercicio 2 :: Return: total de KM realizados.
let resultadoFinal3 = hojaRuta3.calcularTotalKilometros();
console.log(" |||||| Hoja Ruta [ 3 ] ||||||||")
console.log("RESULTADO FINAL:",resultadoFinal3)



// Este es el resultado del ejercicio 2 :: Return: total de KM realizados.
let resultadoFinal = hojaRuta.calcularTotalKilometros();
// console.log(" |||||| Hoja Ruta [ 1 ] ||||||||")
// console.log("Km Hoja de Ruta ::",resultadoFinal)

let fechaDesde: Date = new Date("2010-07-04");
let fechaHasta: Date = new Date("2020-07-04");
console.log("fechaDesde:",fechaDesde)
console.log("fechaHasta:",fechaHasta)


let resultadoFinalEntreDosFechas = vehiculo.calcularTotalKilometrosRecorridos(fechaDesde, fechaHasta);
console.log(" |||||| Km entre fechas",fechaDesde," || ", fechaHasta, "||||||||")
console.log("Km totales ::",resultadoFinalEntreDosFechas)
