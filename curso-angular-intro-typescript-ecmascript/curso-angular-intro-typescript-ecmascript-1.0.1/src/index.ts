

/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles{
    autor: string;
    anio: number;

}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 26,
    cancion: "GG",
    detalles: {
        autor: "El Capo",
        anio: 2015
    }
}

const {volumen: vol, segundo, cancion, detalles:{autor}} = reproductor;
//const {autor} = detalles;

console.log('El volumen actual de ' + vol);
console.log('El segundo actual de ', segundo );
console.log('El canción actual de ', cancion);
console.log('El autor es ', autor);
