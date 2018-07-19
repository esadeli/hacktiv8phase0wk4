console.log('Exersice16 - Makan Terus\n');

//Definisikan Fungsi
function makanTerusRekursif(waktu) {
    
    //Base Case
    if(waktu <= 0){
        return 0;
    }

    //Rekursif
    if(waktu > 0){
        waktu = waktu - 15;
        return 1 + makanTerusRekursif(waktu);
    }
    return 0 + makanTerusRekursif(waktu);
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0