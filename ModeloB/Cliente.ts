import {Factura} from "./Factura"

export class Cliente{

    private numero:number;
    private razonSocial:string;
    private cuit:number;


    private listaFactura:Factura[] = new Array();


    constructor(numero?:number, razonSocial?:string, cuit?:number, listaFactura?:Factura[]){
    
        this.numero = numero!;
        this.razonSocial = razonSocial!;
        this.cuit = cuit!;
        this.listaFactura = listaFactura!;


    }


    getNumero():number{

        return this.numero;
    }

    setNumero(numero:number):void{

        this.numero = numero;

    }

    getRazonSocial():string{

        return this.razonSocial;
    }

    setRazonSocial(razonSocial:string):void{

        this.razonSocial = razonSocial;

    }

    getCuit():number{

        return this.cuit;
    }

    setCuit(cuit:number):void{

        this.cuit = cuit;

    }

    getListaFactura():Factura[]{

        return this.listaFactura;

    }

    setListaFactura(listaFactura:Factura[]):void{

        this.listaFactura = listaFactura;
    }


    toString():string{

        return "\nNumero: " + this.numero + "\nRazon Social: " + this.razonSocial + "\nCuit: " + this.cuit;
        

    }


    totalFacturadoXTipoPago(tipoPago:string):number{

        let total:number = 0;

        for(let factura of this.listaFactura){


            if(tipoPago != null){

                if(factura.getTipoPago() == tipoPago){

                    total += factura.calcularTotalFinal();

                }

            }else{

                total += factura.calcularTotalFinal();

            }

        }

        return total;

    }


}