// import {Vehiculo} from './vehiculo';
// import {Detalle} from './detalle';

import Vehiculo = require('./vehiculo')
import Detalle = require('./detalle')

class HojaRuta{
    private fecha: Date;
    private numero: number;
    private vehiculo: Vehiculo;
    private arregloDetalles: Detalle[] = new Array<Detalle>();

    constructor(fecha: Date, numero: number, vehiculo: Vehiculo) {
        this.fecha = fecha;
        this.numero = numero;
        this.vehiculo = vehiculo;
    }

    getArregloDetalle():Detalle[]{
        return this.arregloDetalles
    }
    setArregloDetalle(arregloDetalle:Detalle[]){
        this.arregloDetalles = arregloDetalle;
    }

    getFecha(){
        return this.fecha;
    }

    setFecha(fecha:Date){
        this.fecha = fecha;
    }

    getNumero(){
        return this.numero;
    }

    setNumero(numero:number){
        this.numero = numero;
    }

    getVehiculo(){
        return this.vehiculo;
    }

    setVehiculo(vehiculo:Vehiculo){
        this.vehiculo = vehiculo;
    }

    salida(kmSalida:number, kmRegreso:number):number{
        return kmRegreso-kmSalida;
    }

    calcularTotalKilometros():number{
        let detalles = this.getArregloDetalle();
        let kmRegresoAux:number = 0;
        let kmSalidaAux:number = 0;
        //console.log("||||||||||| calcularTotalKilometros(); :: ./hojaRuta.ts  ||||||||||||");
        for (let i = 0; i < detalles.length; i++){
            // console.log("Km Regreso[", i ,"]:", detalles[i].getKmRegreso())
            // console.log("Km Salida[", i ,"]:", detalles[i].getKmSalida())
            kmRegresoAux += detalles[i].getKmRegreso();
            kmSalidaAux += detalles[i].getKmSalida();
        }
        let totalKilometros = kmRegresoAux - kmSalidaAux;
        // console.log("############### ºººººº ###################");
        // console.log("KM Regreso:", kmRegresoAux ,"\nKm Salida:", kmSalidaAux);
        // console.log("############### ºººººº ###################");

        return totalKilometros;
    }

}

export = HojaRuta
//module.exports = HojaRuta;