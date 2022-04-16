import DetalleFactura = require('./detalleFactura')

class Articulo{

    private codigo: number;
    private denominacion: string;
    private precio: number;
    private unidadMedida: string;
    private detalleFactura: DetalleFactura[] = new Array<DetalleFactura>();

    constructor(codigo: number, denominacion: string, precio: number, unidadMedida: string){
        this.codigo = codigo;
        this.denominacion = denominacion;
        this.precio = precio;
        this.unidadMedida = unidadMedida;
    }

    getDetalleFactura():DetalleFactura[]{
        return this.detalleFactura
    }
    setDetalleFactura(detalleFactura:DetalleFactura[]){
        this.detalleFactura = detalleFactura;
    }

    getPrecio() {
        return this.precio;
    }
    setPrecio(precio: number) {
        this.precio = precio;
    }

    getCodigo() {
        return this.codigo;
    }
    setCodigo(codigo: number) {
        this.codigo = codigo;
    }

    getDenominacion() {
        return this.denominacion;
    }
    setDenominacion(denominacion: string) {
        this.denominacion = denominacion;
    }
    getMedida() {
        return this.unidadMedida;
    }
    setMedida(unidadMedida: string) {
        this.unidadMedida = unidadMedida;
    }
    
}

export = Articulo;