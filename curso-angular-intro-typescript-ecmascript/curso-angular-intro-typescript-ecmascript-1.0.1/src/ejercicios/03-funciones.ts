function sumar (a: number, b: number) :number{
    return a + b;

}

const sumarFlecha = (a:number, b:number):number => {
    return a + b;
}

function multiplicar (numero: number, otroNumero?: number, base:number = 2 ): number{
    return numero * base;
}

interface PersonajeLOR{
    nonbre: string;
    pv: number;
    mostrarHp: () => void;
}

const nuevoPersonaje: PersonajeLOR = {
    nonbre: 'Ray',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida: ', this.pv)
    }
    
}


function curar(personaje: PersonajeLOR, curarX:number):void{
    personaje.pv += curarX;
}



const resultado = multiplicar(20.1, 12.8)
console.table(resultado);