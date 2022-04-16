import Articulo = require('./articulo');
import Factura = require('./factura');

class DetalleFactura{
    private cantidad: number;
    private subTotal: number;
    private articulo: Articulo;
    private factura: Factura;

    constructor(cantidad: number, subTotal: number, articulo: Articulo, factura: Factura){
        this.cantidad = cantidad;
        this.subTotal = subTotal;
        this.articulo = articulo;
        this.factura = factura;
    }

    getArticulo(){
        return this.articulo;
    }
    setArticulo(articulo: Articulo){
        this.articulo = articulo;
    }
    getFactura(){
        return this.factura;
    }
    setFactura(factura: Factura){
        this.factura = factura;
    }

    getCantidad():number{
        return this.cantidad;
    }
    setCantidad(cantidad: number){
        this.cantidad = cantidad;
    }



    getSubTotal():number{
        return this.subTotal;
    }
    setSubTotal(subTotal: number){
        this.subTotal = subTotal;
    }

    calcularSubTotal(){
        this.setSubTotal(this.getCantidad() * this.articulo.getPrecio())
    }

}

export = DetalleFactura;