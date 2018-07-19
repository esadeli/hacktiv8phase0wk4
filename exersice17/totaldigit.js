console.log('Exersice17 - Total Digit\n');

//Definisikan Fungsi
function totalDigitRekursif(angka) {
    
    //Base Case
    if(angka<10){
        return angka;
    }

    //Rekursif
    //Get the first digit
    var angkaString = angka+'';
    var angkaPertama = parseInt(angkaString[0]);
    var angkaSisa = parseInt(angkaString.substr(1));

    return angkaPertama + totalDigitRekursif(angkaSisa);
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5

console.log(totalDigitRekursif(00191)); // 11