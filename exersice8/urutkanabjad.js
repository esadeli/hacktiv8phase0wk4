console.log('Exersice 8 - Urutkan Abjad \n');

//Definisikan fungsi
function urutkanAbjad(str) {

    var abjadRef = 'abcdefghijklmnopqrstuvwxyz';

    var strBaru = '';
    for(var i = 0;i<abjadRef.length;i++){
        for(var j = 0;j<str.length;j++){
            if(abjadRef[i]===str[j]){
                strBaru = strBaru + str[j];
            }
        }
    }
    return strBaru;
}


// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'