console.log('Exersice 1 - Tentukan Bilangan Prima \n');

// Definisikan Fungsi:
function angkaPrima(angka) {

    if(angka%2!==0){

        var count = 3; // bilangan ganjil prima terkecil
        var isAPrime = 0;
        while(isAPrime !== 1){
            if(angka%count===0 && count<angka){
                isAPrime = 0;
                return false;
            }else if(angka%count===0 && count === angka){
                isAPrime = 1;
                return true;
            }
            count = count+1
        }
    }else if(angka===2){  // satu - satunya bilangan genap prima
        return true;
    }else if(angka%2===0){ // bilangan genap sudah pasti bukan bilangan prima
        return false;
    }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

console.log(angkaPrima(179)); // false
