console.log('Exersice 11 - Change Me \n');

//Definisikan fungsi 
function changeMe(arr) {
    var str = '';

    if(arr.length > 0){
        for(var i = 0; i<arr.length;i++){

            //Proses tampilan
            str = str + (i+1) +'. '+arr[i][0]+' '+arr[i][1] +'\n'+
                '{ firstName: \''+arr[i][0]+'\',\n'+
                   '  lastName: \''+arr[i][1]+'\',\n'+
                   '  gender: \''+arr[i][2]+'\'\n';
    
            if(arr[i][3]> 0){
                var count = 2018 - arr[i][3];
                str = str + '  age: '+count+' }\n';
            }else{
                str = str + '  age: Invalid Birth Year }\n';
            }       
        }
    }else{
        str = '""';
    }
       
    console.log(str);
    return '';
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""