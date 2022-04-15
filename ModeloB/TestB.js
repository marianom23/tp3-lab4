"use strict";
exports.__esModule = true;
var Cliente_1 = require("./Cliente");
var DetalleFactura_1 = require("./DetalleFactura");
var Factura_1 = require("./Factura");
var Articulo_1 = require("./Articulo");
var listaCliente = new Array();
var listaDetalleFact1 = new Array();
var listaDetalleFact2 = new Array();
var listaDetalleFact3 = new Array();
var listaFactura = new Array();
var listaArticulo = new Array();
var cliente1 = new Cliente_1.Cliente(1, "Federico", 2031029204, listaFactura);
listaCliente.push(cliente1);
var factura1 = new Factura_1.Factura("A", 1, 62, "E", 0, 0, new Date("2020-10-02"), undefined, listaDetalleFact1);
var factura2 = new Factura_1.Factura("B", 2, 63, "TD", 0, 0, new Date("2020-01-10"), undefined, listaDetalleFact2);
var factura3 = new Factura_1.Factura("A", 3, 64, "TC", 0, 0, new Date("2020-02-01"), undefined, listaDetalleFact3);
listaFactura.push(factura1);
listaFactura.push(factura2);
listaFactura.push(factura3);
var articulo1 = new Articulo_1.Articulo(243, "Azucar", 40, "Kg");
var articulo2 = new Articulo_1.Articulo(244, "Lavandina", 100, "L");
var articulo3 = new Articulo_1.Articulo(245, "Coca Cola", 140, "L");
var articulo4 = new Articulo_1.Articulo(246, "Polenta", 23, "Kg");
var articulo5 = new Articulo_1.Articulo(247, "Lysoform", 100, "L");
listaArticulo.push(articulo1);
listaArticulo.push(articulo2);
listaArticulo.push(articulo3);
listaArticulo.push(articulo4);
listaArticulo.push(articulo5);
var detalle1 = new DetalleFactura_1.DetalleFactura(2, 0, factura1, articulo1);
var detalle2 = new DetalleFactura_1.DetalleFactura(3, 0, factura1, articulo2);
listaDetalleFact1.push(detalle1);
listaDetalleFact1.push(detalle2);
for (var _i = 0, listaCliente_1 = listaCliente; _i < listaCliente_1.length; _i++) {
    var cliente = listaCliente_1[_i];
    console.log("DATOS CLIENTE: ");
    console.log(cliente.toString());
    console.log("");
    for (var _a = 0, _b = cliente.getListaFactura(); _a < _b.length; _a++) {
        var factura = _b[_a];
        console.log("DATOS FACTURA: ");
        console.log(factura.toString());
        console.log("");
        for (var _c = 0, _d = factura.getListaDetalle(); _c < _d.length; _c++) {
            var detalle = _d[_c];
            console.log("DATOS DETALLE: ");
            console.log(detalle.toString());
            console.log("");
            console.log("DATOS ARTICULO: ");
            console.log(detalle.getArticulo().toString());
            console.log("");
        }
    }
}
console.log("");
console.log("CALCULAR SUBTOTAL: ");
console.log("");
var subTotal1 = detalle1.calcularSubTotal();
var subTotal2 = detalle2.calcularSubTotal();
console.log("El subTotal correspondiente al detalle 1 es: $" + subTotal1);
console.log("");
console.log("El subTotal correspondiente al detalle 2 es: $" + subTotal2);
console.log("");
console.log("CALCULAR TOTAL ITEMS: ");
console.log("");
var totalItems = factura1.calcularTotalItems();
console.log("El Total Items de la factura N° " + factura1.getNumero() + ": $" + totalItems);
console.log("");
console.log("CALCULAR TOTAL FINAL: ");
console.log("");
var totalFinal = factura1.calcularTotalFinal();
console.log("El Total Final de la factura N° " + factura1.getNumero() + ": $" + totalFinal);
console.log("");
console.log("CALCULAR TOTAL FINAL X TIPO PAGO: ");
console.log("");
var totalFinalPago = cliente1.totalFacturadoXTipoPago("E");
console.log("El Total Final x Tipo Pago de la factura N° " + factura1.getNumero() + ": $" + totalFinalPago);
console.log("");
/*

import { Cliente } from "./Cliente";
import { DetalleFactura } from "./DetalleFactura";
import { Factura } from "./Factura";
import { Articulo } from "./Articulo";


//Instanciamos Array de los Objetos:

let listaCliente:Cliente[] = new Array();
let listaDetalleFact1:DetalleFactura[] = new Array();
let listaDetalleFact2:DetalleFactura[] = new Array();
let listaDetalleFact3:DetalleFactura[] = new Array();
let listaFactura:Factura[] = new Array();
let listaArticulo:Articulo[] = new Array();

//Instanciamos el Objeto Cliente:

let cliente1:Cliente = new Cliente(1, "Limpiar SA", 2023343211, listaFactura);

//Agregamos Objetos Clientes instanciados al Arreglo:

listaCliente.push(cliente1);

//Instanciamos el Objeto Factura:

let factura1:Factura = new Factura("A", 1, 62, "E", 5, 380, new Date("2020-10-02"), cliente1, listaDetalleFact1);

let factura2:Factura = new Factura("B", 2, 63, "TD", 1, 100, new Date("2020-01-10"), cliente1, listaDetalleFact2);

let factura3:Factura = new Factura("A", 3, 64, "TC", 2, 150, new Date("2020-02-01"), cliente1, listaDetalleFact3);

//Agregamos Objetos Factura instanciados al Arreglo:


//Instanciamos el Objeto Articulo:

let articulo1:Articulo = new Articulo(243, "Azucar", 40, "Kg", listaDetalleFact1);

let articulo2:Articulo = new Articulo(244, "Lavandina", 100, "L", listaDetalleFact1);

let articulo3:Articulo = new Articulo(245, "Coca Cola", 140, "L", listaDetalleFact2);

let articulo4:Articulo = new Articulo(246, "Polenta", 23, "Kg", listaDetalleFact2);

let articulo5:Articulo = new Articulo(247, "Lysoform", 100, "L", listaDetalleFact2);


//Agregamos Objetos Factura instanciados al Arreglo:




//Instanciamos el Objeto DetalleFactura:

let detalle1:DetalleFactura = new DetalleFactura(2, 80, factura1, articulo1);

let detalle2:DetalleFactura = new DetalleFactura(3, 300, factura1, articulo2);

//Agregamos Objetos DetalleFactura instanciados al Arreglo:




console.log("METODO PARA CALCULAR EL SUBTOTAL:");
console.log("");


let sub:number = detalle1.calcularSubTotal();


console.log("El subtotal es $: " + sub);
console.log("");


console.log("METODO PARA CALCULAR TOTAL ITEMS:");
console.log("");

let totalItems:number = factura1.calcularTotalItems();


console.log("El total de Items es $: " + totalItems);
console.log("");


console.log("METODO PARA CALCULAR TOTAL FINAL:");
console.log("");

let totalFinal:number = factura1.calcularTotalFinal();


console.log("El total Final es $: " + totalFinal);
console.log("");

console.log("METODO PARA CALCULAR TOTAL FACTURADO TIPO PAGO:");
console.log("");

let totalFacturado:number = cliente1.totalFacturadoXTipoPago("E");


console.log("El total facturado x Tipo Pago es $: " + totalFacturado);
console.log("");


*/
