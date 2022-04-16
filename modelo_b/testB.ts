import Cliente = require('./cliente')
import Articulo = require('./articulo')
import Factura = require('./factura')
import DetalleFactura = require('./detalleFactura')

let date = new Date("2020-01-01")

let cliente = new Cliente(10,"Razon Social",10);

let art1 = new Articulo(1, "coca-cola", 200, "unidades");
let art2 = new Articulo(2, "sprite", 150, "unidades");
let art3 = new Articulo(3, "fanta", 150, "unidades");
let art4 = new Articulo(4, "pepsi", 150, "unidades");
let art5 = new Articulo(5, "talca", 150, "unidades");

let fact1 = new Factura("A", 11, 20, "Tasdd", 5, 0, date)
let fact2 = new Factura("B", 22, 20, "TD", 10, 0, date)
let fact3 = new Factura("C", 33, 30, "ACX", 15, 0, date)

let detFact1 = new DetalleFactura(10,10, art1, fact1);
let detFact2 = new DetalleFactura(3,50, art2, fact1);

// <<<----- Factura 1 ----->>>
console.log("----- Factura 1 -----")
let detalleFacturas1: DetalleFactura[] = new Array<DetalleFactura>();
detalleFacturas1.push(detFact1, detFact2)

fact1.setDetalleFactura(detalleFacturas1)

detFact1.calcularSubTotal()
detFact2.calcularSubTotal()
console.log("Get Subtotal: $",detFact1.getSubTotal())
console.log("Get Subtotal: $",detFact2.getSubTotal())

fact1.calcularTotalItems();
console.log("Get totalItems: $",fact1.getTotalItems())

let totalFinal = fact1.calcularTotalFinal();
console.log("Total Final: $",totalFinal)

// <<<----- Factura 2 ----->>>
console.log("----- Factura 2 -----")
let detFact3 = new DetalleFactura(3,30, art3, fact2);
let detFact4 = new DetalleFactura(4,20, art4, fact2);
let detFact5 = new DetalleFactura(5,50, art5, fact2);
let detalleFacturas2: DetalleFactura[] = new Array<DetalleFactura>();
detalleFacturas2.push(detFact3, detFact4, detFact5)

fact2.setDetalleFactura(detalleFacturas2)

detFact3.calcularSubTotal()
detFact4.calcularSubTotal()
detFact5.calcularSubTotal()
console.log("Get Subtotal: $",detFact3.getSubTotal())
console.log("Get Subtotal: $",detFact4.getSubTotal())
console.log("Get Subtotal: $",detFact5.getSubTotal())

fact2.calcularTotalItems();
console.log("Get totalItems: $",fact2.getTotalItems())

let totalFinal2 = fact2.calcularTotalFinal();
console.log("Total Final: $",totalFinal2)

cliente.totalFacturadoXTipoPago(fact1.getTipoPago());