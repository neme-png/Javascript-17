let a = [3, 5, 10, 2, 8];

function analizzaArray(a) {
    let somma = a.reduce((acc, n)=> acc + n, 0);
    let media = somma / a.length;

    let valoriMinori= a.filter(n => n < media);
    let valoriMaggiori = a.filter(n => n > media);
    console.log(`Media: ${media.toFixed(2)}`); // Media arrotondata a due decimali
    console.log(`Valori minori della media: ${valoriMinori}`);
    console.log(`Numero di valori minori della media: ${valoriMinori.length}`);
    console.log(`Numero di valori maggiori della media: ${valoriMaggiori.length}`);
}

analizzaArray(a); 