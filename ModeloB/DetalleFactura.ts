import { Articulo } from "./Articulo";
import {Factura} from "./Factura"

export class DetalleFactura{


    private cantidad:number;
    private subTotal:number;


    private factura:Factura;

    private articulo:Articulo;


    constructor(cantidad?:number, subTotal?:number,factura?:Factura, articulo?:Articulo){
    
        this.cantidad = cantidad!;
        this.subTotal = subTotal!;
        this.factura = factura!;
        this.articulo = articulo!;


    }


    getCantidad():number{

        return this.cantidad;
    }

    setCantidad(cantidad:number):void{

        this.cantidad = cantidad;

    }

    getSubTotal():number{

        return this.subTotal;
    }

    setSubTotal(subTotal:number):void{

        this.subTotal = subTotal;

    }

    getFactura():Factura{

        return this.factura;
    }
    
    setFactura(factura:Factura):void{

        this.factura = factura;
    }

    getArticulo():Articulo{

        return this.articulo;

    }

    setArticulo(articulo:Articulo):void{

        this.articulo = articulo;

    }

    toString():string{

        return "\nCantidad: " + this.cantidad + "\nSubTotal: " + this.subTotal;
        

    }


    calcularSubTotal():number{

        this.subTotal = this.cantidad * this.articulo.getPrecio();

        return this.subTotal;

    }




}