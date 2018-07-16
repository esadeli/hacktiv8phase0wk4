console.log('Exersice 2 - Faktor persekutuan terbesar \n');

//Definisikan fungsi
function fpb(angka1,angka2) {
    
    //cek angka terkecil sebagai batas maksimum
    var batasMax = 0;
    if(angka1 < angka2){
        batasMax = angka1;
    }else{
        batasMax = angka2;
    }

    //tentukan faktor persekutuan terbesar
    var fpb = 0;
    var fpbTemp = 0;  // variabel penampung
    for(var i = 1; i<=batasMax;i++){
        if(angka1%i===0 && angka2%i===0){
            fpbTemp = i;
        }
        if(fpb<fpbTemp){
            fpb = fpbTemp;
        }
    }
    return fpb;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1