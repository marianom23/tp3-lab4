import DetalleFactura = require("./detalleFactura");

class Factura {
    private letra: string;
    private numero: number;
    private recargo: number;
    private tipoPago: string;
    private totalItems: number;
    private totalFinal: number;
    private fecha: Date;
    private detalleFactura: DetalleFactura[] = new Array<DetalleFactura>();

    constructor(letra: string, numero: number, recargo: number, tipoPago: string, totalItems: number, totalFinal: number, fecha: Date) {
        this.letra = letra;
        this.numero = numero;
        this.recargo = recargo;
        this.tipoPago = tipoPago;
        this.totalItems = totalItems;
        this.totalFinal = totalFinal;
        this.fecha = fecha;
    }

    getRecargo():number{
        return this.recargo;
    }
    setRecargo(recargo:number){
        this.recargo = recargo;
    }

    getTipoPago():string{
        return this.tipoPago;
    }
    setTipoPago(tipoPago:string){
        this.tipoPago = tipoPago;
    }

    getTotalItems():number{
        return this.totalItems;
    }
    setTotalItems(totalItems:number){
        this.totalItems = totalItems;
    }

    getDetalleFactura():DetalleFactura[]{
        return this.detalleFactura
    }
    setDetalleFactura(detalleFactura:DetalleFactura[]){
        this.detalleFactura = detalleFactura;
    }

    calcularTotalItems(){
        let detalles = this.getDetalleFactura(); 
        let subTotalAux:number = 0;
        detalles.forEach(function(det){
            subTotalAux += det.getSubTotal();
        });
        this.setTotalItems(subTotalAux);
    }

    calcularTotalFinal():number{
        let totalItems = this.getTotalItems();
        let recargo = this.getRecargo();
        return totalItems+recargo;
    }

}

export = Factura;