export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia',
    precio: 2000
}

const tablet: Producto = {
    desc: 'Tablet',
    precio: 5000
}

export function calcularISV(productos: Producto[]):[number, number ]{
    
    let total = 0;
    productos.forEach( ({precio})=>{
        total += precio
    })
    return [total, total * 0.15];

}

const articulos = [telefono, tablet];


const [total, isv] = calcularISV(articulos);

// console.log("Total: ", total);
// console.log("ISV: ", isv);

