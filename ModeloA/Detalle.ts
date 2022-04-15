import { HojaRuta } from './HojaRuta'

export class Detalle{

    private kmSalida:number;
    private kmSRegreso:number;
    private horaSalida:number;
    private horaRegreso:number;
    private minutoSalida:number;
    private minutoRegreso:number;

    private hojaRuta:HojaRuta;
    constructor(kmSalida?:number, kmSRegreso?:number, horaSalida?:number, horaRegreso?:number, minutoSalida?:number, minutoRegreso?:number, hojaRuta?:HojaRuta){

        this.kmSalida = kmSalida!;
        this.kmSRegreso = kmSRegreso!;
        this.horaSalida = horaSalida!;
        this.horaRegreso = horaRegreso!;
        this.minutoSalida = minutoSalida!;
        this.minutoRegreso = minutoRegreso!;
        this.hojaRuta = hojaRuta!;

    }

    getKmSalida():number{

        return this.kmSalida;
    }

    setKmSalida(kmSalida:number):void{

        this.kmSalida = kmSalida;

    }

    getKmRegreso():number{

        return this.kmSRegreso;
    }

    setKmRegreso(kmSRegreso:number):void{

        this.kmSRegreso = kmSRegreso;

    }

    getHoraSalida():number{

        return this.horaSalida;
    }

    setHoraSalida(horaSalida:number):void{

        this.horaSalida = horaSalida;

    }

    getHoraRegreso():number{

        return this.horaRegreso;
    }

    setHoraRegreso(horaRegreso:number):void{

        this.horaRegreso = horaRegreso;

    }

    getMinutoSalida():number{

        return this.minutoSalida;
    }

    setMinutoSalida(minutoSalida:number):void{

        this.minutoSalida = minutoSalida;

    }

    getMinutoRegreso():number{

        return this.minutoRegreso;
    }

    setMinutoRegreso(minutoRegreso:number):void{

        this.minutoRegreso = minutoRegreso;

    }

    getHojaRuta():HojaRuta{

        return this.hojaRuta;
    }

    setHojaRuta(hojaRuta:HojaRuta):void{

        this.hojaRuta = hojaRuta;

    }


      toString():string{

        return "\nKm Salida: " + this.kmSalida + "\nKm Regreso: " + this.kmSRegreso +
        "\nHora Salida: " + this.horaSalida + "\nHora Regreso: " + this.horaRegreso +
        "\nMinuto Salida: " + this.minutoSalida + "\nMinuto Regreso: " + this.minutoRegreso;

    }


}