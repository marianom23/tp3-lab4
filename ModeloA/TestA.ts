import { HojaRuta } from './HojaRuta'
import { Detalle } from './Detalle'
import { Vehiculo } from './Vehiculo'

let listaHoja:HojaRuta[] = new Array();

let listaDetalle:Detalle[] = new Array();

let listaVehiculo:Vehiculo[] = new Array();


let vehiculo1:Vehiculo = new Vehiculo("A232", "Chevrolet", "CorsaClassic", listaHoja);

listaVehiculo.push(vehiculo1);

let hoja1:HojaRuta = new HojaRuta(new Date("2021-02-10"), 1, listaDetalle);

listaHoja.push(hoja1);


let detalle1:Detalle = new Detalle(178, 200, 10, 11, 23, 34);

let detalle2:Detalle = new Detalle(200, 300, 11, 12, 43, 23);

let detalle3:Detalle = new Detalle(300, 457, 12, 13, 34, 54);


listaDetalle.push(detalle1);
listaDetalle.push(detalle2);
listaDetalle.push(detalle3);



for(let vehiculo of listaVehiculo){

    console.log("OBTENGO LOS DATOS DEL VEHICULO:");
    console.log("");

    console.log(vehiculo.toString());
    console.log("");

    for(let hoja of vehiculo.getListaHoja()){

        console.log("OBTENGO LOS DATOS DE LAS HOJAS:");
        console.log("");
    
        console.log(hoja.toString());
        console.log("");


        for(let detalle of hoja.getListaDetalle()){

            console.log("OBTENGO LOS DATOS DEL DETALLE:");
            console.log("");
    
            console.log(detalle.toString());
            console.log("");

        }


    }


}


console.log("OBTENGO USANDO EL METODO TOTAL KM RECORRIDOS X AUTO:");
console.log("");

let totalKm: number = vehiculo1.calcularTotalKilometrosRecorridos(new Date("2021-02-09"), new Date("2021-02-13"));

console.log("El total de Km recorridos para el vehiculo " +vehiculo1.getModelo()+": " +totalKm+" km.");
console.log("");


console.log("OBTENGO USANDO EL METODO TOTAL KM RECORRIDOS X HOJA DE RUTA:");
console.log("");

let km:number = hoja1.calcularTotalKilometros();

console.log("El total de Km recorridos para la hoja de ruta N° " +hoja1.getNumero()+": " +km+" km.");
console.log("");







