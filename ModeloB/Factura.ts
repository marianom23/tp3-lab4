import { Cliente } from "./Cliente";
import { DetalleFactura } from "./DetalleFactura";

export class Factura{


    private letra:string;
    private numero:number;
    private recargo:number;
    private tipoPago:string;
    private totalItems:number;
    private totalFinal:number;
    private fecha:Date;


    private cliente:Cliente;

    private listaDetalle:DetalleFactura[] = new Array();

    constructor(letra?:string, numero?:number, recargo?:number, tipoPago?:string, totalItems?:number, totalFinal?:number, fecha?:Date, cliente?:Cliente, listaDetalle?:DetalleFactura[]){


        this.letra = letra!;
        this.numero = numero!;
        this.recargo = recargo!;
        this.tipoPago = tipoPago!;
        this.totalItems = totalItems!;
        this.totalFinal = totalFinal!;
        this.fecha = fecha!;
        this.cliente = cliente!;
        this.listaDetalle = listaDetalle!;

    }


    getLetra():string{

        return this.letra;
    }

    setLetra(letra:string):void{

        this.letra = letra;

    }

    getNumero():number{

        return this.numero;
    }

    setNumero(numero:number):void{

        this.numero = numero;

    }

    getRecargo():number{

        return this.recargo;
    }

    setRecargo(recargo:number):void{

        this.recargo = recargo;

    }

    getTipoPago():string{

        return this.tipoPago;
    }

    setTipoPago(tipoPago:string):void{

        this.tipoPago = tipoPago;

    }

    getTotalItems():number{

        return this.totalItems;
    }

    setTotalItems(totalItems:number):void{

        this.totalItems = totalItems;

    }

    getTotalFinal():number{

        return this.totalFinal;
    }

    setTotalFinal(totalFinal:number):void{

        this.totalFinal = totalFinal;

    }

    getFecha():Date{

        return this.fecha;
    }

    setFecha(fecha:Date):void{

        this.fecha = fecha;
    }

    getCliente():Cliente{

        return this.cliente;

    }

    setCliente(cliente:Cliente):void{

        this.cliente = cliente;

    }

    getListaDetalle():DetalleFactura[]{

        return this.listaDetalle;
    }

    setListaDetalle(listaDetalle:DetalleFactura[]):void{

        this.listaDetalle = listaDetalle;

    }


    toString():string{

        return "\nLetra: " + this.letra + "\nNumero: " + this.numero + "\nRecargo: " + this.recargo +
        "\nTipo de Pago: " + this.tipoPago + "\nTotal Items: " + this.totalItems +
        "\nTotal Final: " + this.totalFinal + "\nFecha: " + this.fecha;

    }


    calcularTotalItems ():number{

        for(let detalle of this.listaDetalle){

           this.totalItems += detalle.calcularSubTotal(); 


        }

        return this.totalItems;


    }

    calcularTotalFinal ():number{

      
        this.totalFinal = this.totalItems + this.recargo;

        return this.totalFinal;


    }



}