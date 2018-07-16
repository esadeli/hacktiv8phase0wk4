console.log('Exersice 4 - Cari Modus \n');

// Definiskan fungsi
function cariModus(arr) {

    var modus = 0;
    var count = 0;
    var frekuensi = 0;  // seberapa sering muncul
    for(var i=0;i<arr.length;i++){
        var acuan = arr[i];
        //console.log(acuan + ' - '+i);
        for(var j = 0;j<arr.length;j++){
            //console.log(arr[j]);
            if(arr[j]===acuan){
                count = count+1;
                //console.log(count);
            }
        }
        if(frekuensi < count){
            frekuensi = count;
            modus = acuan;
        }
        count = 0;
    }

    //display kesimpulan
    if(frekuensi === arr.length || frekuensi === 1){
        modus = -1;
    }else{
        modus = modus;
    }

    return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1