console.log('Exersice 3 - Cari Median \n');

// Definisikan fungsi
function cariMedian(arr) {
    var ukuran = arr.length;
    var tengah = 0;
    if(ukuran%2!==0){
        tengah = Math.round(ukuran/2);
        tengah = tengah-1;

        return arr[tengah];
    }else if(ukuran%2===0){
        tengah = ukuran/2;
        var nilai = arr[tengah-1]+arr[tengah];
        return nilai/2;
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5