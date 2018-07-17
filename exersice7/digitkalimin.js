console.log('Exersice 7 - Digit Perkalian Minimum \n');

// Definisikan Fungsi
function digitPerkalianMinimum(angka) {
    
    var awalan = 1;
    var akhiran = angka;
    var angkaString = '';
    var ukuran = ((angka*100)+'').length;
    //console.log(ukuran)
    if(angka!==1){
        for(var i=1;i<=angka;i++){
            if(angka%i===0){
                awalan = i;
                akhiran = angka/awalan;
                //console.log(i,' - ',awalan,' - ',akhiran);
                angkaString = akhiran+''+awalan;
                //console.log(angkaString);

                if(ukuran > angkaString.length){
                    ukuran = angkaString.length;
                    //console.log(i,' - ',angkaString,' - ',ukuran);
                }
            }
        }
    }else{
        ukuran = 2;
    }
    return ukuran;
}


// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2

console.log(digitPerkalianMinimum(1800)); // 4