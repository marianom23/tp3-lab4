import HojaRuta = require('./hojaRuta') ;
//import {HojaRuta} from './hojaRuta'

class Detalle {
    private kmSalida: number;
    private kmRegreso: number;
    private horaSalida: number;
    private horaRegreso: number;
    private minutoSalida: number;
    private minutoRegreso: number;
    private hojaRuta: HojaRuta;

    constructor(kmSalida: number, kmRegreso: number, horaSalida: number, horaRegreso:number, minutoSalida:number,minutoRegreso:number, hojaRuta: HojaRuta) {
        this.kmSalida = kmSalida;
        this.kmRegreso = kmRegreso;
        this.horaSalida = horaSalida;
        this.horaRegreso = horaRegreso;
        this.minutoSalida = minutoSalida;
        this.minutoRegreso = minutoRegreso;
        this.hojaRuta = hojaRuta;
    }

    getKmSalida():number{
        return this.kmSalida;
    }

    getKmRegreso():number{
        return this.kmRegreso;
    }    
    getHoraSalida(){
        return this.horaSalida;
    }    
    getHoraRegreso(){
        return this.horaRegreso;
    }    
    getMinutoSalida(){
        return this.minutoSalida;
    }    
    getMinutoRegreso(){
        return this.minutoRegreso;
    }
    setKmSalida(kmSalida:number){
        this.kmSalida = kmSalida;
    }
    setKmRegreso(kmRegreso:number){
        this.kmRegreso = kmRegreso;
    }
    setHoraSalida(kmRegreso:number){
        this.kmRegreso = kmRegreso;
    }
    setHoraRegreso(horaRegreso:number){
        this.horaRegreso = horaRegreso;
    }
    setMinutoSalida(horaSalida:number){
        this.horaSalida = horaSalida;
    }
    setMinutoRegreso(minutoRegreso:number){
        this.minutoRegreso = minutoRegreso;
    }
    setHojaRuta(hojaRuta:HojaRuta){
        this.hojaRuta = hojaRuta;
    }
    getHojaRuta(){
        return this.hojaRuta;
    }
}

export = Detalle
//module.exports = Detalle