import { HojaRuta } from './HojaRuta'

export class Vehiculo{



    private patente:string;
    private marca:string;
    private modelo:string;


    private listaHoja:HojaRuta[] = new Array();


    constructor(patente?:string, marca?:string, modelo?:string, listaHoja?:HojaRuta[]){

        this.patente = patente!;
        this.marca = marca!;
        this.modelo = modelo!;
        this.listaHoja = listaHoja!;
        

    }


    getPatente():string{

        return this.patente;
    }

    setPatente(patente:string):void{

        this.patente = patente;

    }

    getMarca():string{

        return this.marca;
    }

    setMarca(marca:string):void{

        this.marca = marca;

    }

    getModelo():string{

        return this.modelo;
    }

    setModelo(modelo:string):void{

        this.patente = modelo;

    }

    getListaHoja():HojaRuta[]{

        return this.listaHoja;
    }

    setListaHoja(listaHoja:HojaRuta[]):void{

        this.listaHoja = listaHoja;

    }


    toString():string{

        return "\nPatente: " + this.patente + "\nMarca: " + this.marca + "\nModelo: " + this.modelo;

    }


    calcularTotalKilometrosRecorridos(fechaDesde:Date, fechaHasta:Date): number{

        let totalKm:number = 0;
       
        for(let hoja of this.listaHoja){  

            if(hoja.getFecha() >= fechaDesde && hoja.getFecha() <= fechaHasta){  

                totalKm += hoja.calcularTotalKilometros();

            }

        }
        

        return totalKm;

    }


}