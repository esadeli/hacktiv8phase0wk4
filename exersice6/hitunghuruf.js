console.log('Exersice 6 - Hitung Huruf \n');

//Definisikan Fungsi
function hitungHuruf(kata) {

    //Regrouping string into separate array of word
    var newKata = [];
    var tempStr = '';
    for(var i = 0;i<kata.length;i++){
        
        if(kata[i]!==' ' && kata[i]!==','){
            tempStr = tempStr+kata[i];
            // console.log(tempStr,' - ',i);
            if(i===kata.length-1){
                // tempArr.push(tempStr);
                newKata.push(tempStr);
            }
        }else if(kata[i]===' ' || kata[i]===','){
            //console.log(newWord,' - ',i);
            newKata.push(tempStr);
            tempStr = ''; // empty temporary String
        }
        //console.log(tempStr);
    }
    console.log(newKata);

    //Rearrange each array of word
    var abjadRef = 'abcdefghijklmnopqrstuvwxyz';
    var checkStr = '';
    var newKataArr = [];

    for(var j = 0; j<newKata.length;j++){
        var kataKunci = newKata[j].toLowerCase();
        // console.log(kataKunci);

        for(var k = 0; k<abjadRef.length;k++){
            for(var l = 0;l<kataKunci.length;l++){
               if(kataKunci[l]===abjadRef[k]){
                   checkStr = checkStr +kataKunci[l];
               }
            }
        }
        newKataArr.push(checkStr);
        checkStr = '';
    }
    
    console.log(newKataArr);

    //Getting the word
    for(var m = 0;m<newKataArr.length;m++){
        for(var n = 0;n<newKataArr[m].length;n++){
            if(newKataArr[m][n]===newKataArr[m][n+1]){
                return newKata[m];
            }else if(m === newKataArr.length-1){
                return -1;
            }
        }
    }
    //return '';
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau

//Test another case
console.log(hitungHuruf('mengayuh perahu di dinau')); // danau