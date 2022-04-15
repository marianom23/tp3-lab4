import { Detalle } from './Detalle'
import { Vehiculo } from './Vehiculo'


export class HojaRuta{

    private fecha:Date;
    private numero:number;
    private vehiculo:Vehiculo;
    private listaDetalle:Detalle[] = new Array();

    constructor(fecha?:Date, numero?:number, listaDetalle?:Detalle[], vehiculo?:Vehiculo){

        this.fecha = fecha!;
        this.numero = numero!;
        this.listaDetalle = listaDetalle!;
        this.vehiculo = vehiculo!;
        

    }

    getFecha():Date{

        return this.fecha;
    }

    setFecha(fecha:Date):void{

        this.fecha = fecha;

    }

    getNumero():number{

        return this.numero;
    }

    setNumero(numero:number):void{

        this.numero = numero;

    }

    getVehiculo():Vehiculo{

        return this.vehiculo;
    }

    setVehiculo(vehiculo:Vehiculo):void{

        this.vehiculo = vehiculo;

    }

    
    getListaDetalle():Detalle[]{

        return this.listaDetalle;
    }

    setListaDetalle(listaDetalle:Detalle[]):void{

        this.listaDetalle = listaDetalle;

    }

    toString():string{

        return "\nFecha: " + this.fecha + "\nNumero: " + this.numero;

    }

    calcularTotalKilometros():number{
        let totalKm:number = 0;
        for(let item of this.listaDetalle){
            totalKm += (item.getKmRegreso() - item.getKmSalida()); 
        }
        return totalKm;
    }


}