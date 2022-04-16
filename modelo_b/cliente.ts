import Factura = require('./factura')

class Cliente {
    private numero: number;
    private razonSocial: string;
    private cuit: number;
    private facturas: Factura[] = new Array<Factura>();


    constructor(numero: number, razonSocial: string, cuit: number) {
        this.numero = numero;
        this.razonSocial = razonSocial;
        this.cuit = cuit;
    }

    getFactura():Factura[]{
        return this.facturas
    }
    setFactura(facturas:Factura[]){
        this.facturas = facturas;
    }

    totalFacturadoXTipoPago(tipoPago:string){
        if ((tipoPago !== "E") && (tipoPago !== "TD") && tipoPago !== "TC" && tipoPago !== "CC" && tipoPago !== "TR"){
            console.log("Tipo de pago inválido")
            return 
        }
        let total:number =0;
        let facturas = this.getFactura();
        facturas.forEach(fact => {
            total += fact.getTotalItems();
        });
    }

}
export = Cliente;