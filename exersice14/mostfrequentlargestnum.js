console.log('Exersice14 - Most Frequent Largest Number\n');

//Definisikan fungsi
function sorting(arrNumber) {
    var newArrNumber = [];
    var sortedTemp = [];

    //Base Case
    if(arrNumber.length < 1){
        return '';
    }

    // Get the smallest number of and array
    var terkecil = arrNumber[0];
    for(var i = 0; i<arrNumber.length;i++){
        if(arrNumber[i]<=terkecil){
            terkecil = arrNumber[i];
        }
    }

    //Form a new smaller array
    for(var j = 0;j<arrNumber.length;j++){
        if(arrNumber[j]!==terkecil){
            newArrNumber.push(arrNumber[j]);
        }else if(arrNumber[j]===terkecil){
            // Put the smallest value in a temporary array
            sortedTemp.push(terkecil);
        }
    }
    return sortedTemp +','+ sorting(newArrNumber);
}

function getTotal(arrNumber) {
    
    var sortedArray = [];
    var temporaryNumberString = '';

    if(arrNumber.length>0){
        // Convert String to get sorted array
        for(var i = 0;i<arrNumber.length;i++){
            // console.log(arrNumber[i]);
            if(arrNumber[i]!==','){
                temporaryNumberString = temporaryNumberString + arrNumber[i];
            }else if(arrNumber[i]===','){
                sortedArray.push(parseInt(temporaryNumberString));
                temporaryNumberString = '';
            }
        }

        // Count the frequency of the biggest number
        var count = 0;
        for(var j = 0; j< sortedArray.length;j++){
            if(sortedArray[j]===sortedArray[sortedArray.length-1]){
                count = count+1;
            }
        }
        return '\'angka paling besar adalah '+sortedArray[sortedArray.length-1]+
            ' dan jumlah kemunculan sebanyak '+count+' kali\'';
    }else{
        return '\'\'';
    }
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

//Test Case
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
// //''