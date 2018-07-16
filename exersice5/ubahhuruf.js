console.log('Exersice 5 - Ubah Huruf \n');

// Definisikan fungsi
function ubahHuruf(kata) {
    
    var abjadRef = 'abcdefghijklmnopqrstuvwxyz';

    var kataBaru = '';
    for(var i = 0; i<kata.length;i++){
        var acuan = kata[i];
        for(var j = 0;j<abjadRef.length;j++){
            if(abjadRef[j]===acuan && j!==abjadRef.length-1){
                kataBaru = kataBaru+abjadRef[j+1]; 
            }else if(abjadRef[j]===acuan && j===abjadRef.length-1){
                kataBaru = kataBaru + 'a';
            }
        }
    }
    return kataBaru;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu