console.log('Exersice 10 - Cek AB \n');

function checkAB(num) {
    var posisiA = 0;
    var posisiB = 0;
    var jarakAB = 0;

    //Cek posisi A
    var indexA = 0;
    while(num[indexA]!== 'a'&& indexA<num.length){
        indexA = indexA+1;   
        posisiA = indexA;     
    }


    //Cek posisi B
    var indexB = posisiA
    while(num[indexB]!=='b'&&indexB<num.length+num.length){
        indexB = indexB+1;
        posisiB = indexB;
    }
    
    // //Posisi akhir
    jarakAB = posisiB - posisiA;
    if(jarakAB < num.length-1){
        return true;
    }else if(jarakAB > num.length){
        return false;
    }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false