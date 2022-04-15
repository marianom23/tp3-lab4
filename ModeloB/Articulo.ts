import { DetalleFactura } from "./DetalleFactura";


export class Articulo{


    private codigo:number;
    private denominacion:string;
    private precio:number;
    private unidadMedida:string;


    private listaDetalle:DetalleFactura[] = new Array();


    constructor(codigo?:number, denominacion?:string, precio?:number, unidadMedida?:string, listaDetalle?:DetalleFactura[]){
    
        this.codigo = codigo!;
        this.denominacion = denominacion!;
        this.precio = precio!;
        this.unidadMedida = unidadMedida!;
        this.listaDetalle = listaDetalle!;


    }


    getCodigo():number{

        return this.codigo;
    }

    setCodigo(codigo:number):void{

        this.codigo = codigo;

    }

    getDenominacion():string{

        return this.denominacion;
    }

    setDenominacion(denominacion:string):void{

        this.denominacion = denominacion;

    }

    getPrecio():number{

        return this.precio;
    }

    setPrecio(precio:number):void{

        this.precio = precio;

    }

    getUnidadMedida():string{

        return this.unidadMedida;
    }

    setUnidadMedida(unidadMedida:string):void{

        this.unidadMedida = unidadMedida;

    }

    getListaDetalle():DetalleFactura[]{

        return this.listaDetalle;
    }

    setListaDetalle(listaDetalle:DetalleFactura[]):void{

        this.listaDetalle = listaDetalle;

    }



    toString():string{

        return "\nCodigo: " + this.codigo + "\nDenominacion: " + this.denominacion + "\nPrecio: " + this.precio +
        
        "\nUnidad Medida: " + this.unidadMedida;
        

    }




}