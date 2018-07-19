console.log('Exersice18 - Kali Terus\n');

//Definisikan Fungsi
function kaliTerusRekursif(angka) {
    var angkaString = angka + '';

    //Base Case
    if(angka < 10){
        return angka;
    }

    //Rekursif
    var totalKali = 1;
    for(var i = 0; i<angkaString.length;i++){
        totalKali = totalKali*parseInt(angkaString[i]);
    }

    return kaliTerusRekursif(totalKali);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6