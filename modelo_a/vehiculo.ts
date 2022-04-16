//export class Vehiculo {
import HojaRuta = require('./hojaRuta');

class Vehiculo {
    private patente: string;
    private marca: string;
    private modelo: string;
    private hojaRuta: HojaRuta[] = new Array<HojaRuta>();

    constructor(patente: string, marca: string, modelo: string) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
    }

    getHojaRuta():HojaRuta[]{
        return this.hojaRuta
    }
    setHojaRuta(hojaRuta:HojaRuta[]){
        this.hojaRuta = hojaRuta;
    }

    getPatente(){
        return this.patente;
    }

    setPatente(patente:string){
        this.patente = patente;
    }

    getMarca(){
        return this.marca;
    }

    setMarca(marca:string){
        this.marca = marca;
    }

    getModelo(){
        return this.modelo;
    }

    setModelo(modelo:string){
        this.modelo = modelo;
    }

    calcularTotalKilometrosRecorridos(fechaDesde:Date,fechaHasta:Date):number{
        let arregloHojaRutas = this.getHojaRuta();
        let totalKmRecorridos: number = 0;
        let getKm: number = 0;
        for (let i = 0; i < arregloHojaRutas.length; i++){
            if ( (arregloHojaRutas[i].getFecha() >= fechaDesde) && (arregloHojaRutas[i].getFecha() <= fechaHasta) ){
                getKm = arregloHojaRutas[i].calcularTotalKilometros();
                totalKmRecorridos += getKm;
                // console.log("Entró al bucle FOR: [",i,"]")
                // console.log("Total Km Recorridos:", totalKmRecorridos)
                // console.log("Fecha Desde:", fechaDesde)
                // console.log("Fecha Hasta:" ,fechaHasta)
                // console.log("Fecha Test:", arregloHojaRutas[i].getFecha())
                // console.log("")
            }
        }
        console.log("######################################")
        console.log("######################################")
        console.log("Total total total:" , totalKmRecorridos , "Total total total:")
        console.log("######################################")
        console.log("######################################")
        return totalKmRecorridos;
    }

}


export = Vehiculo
