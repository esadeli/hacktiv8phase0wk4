console.log('Exersice 12 - Shopping time! \n');

//Definisikan fungsi
function shoppingTime(memberId,money) {
    
    let listPrice = [
        ['Sepatu Stacattu',1500000],
        ['Baju Zoro',500000],
        ['Baju H&N',250000],
        ['Sweater Uniklooh',175000],
        ['Casing Handphone',50000]
    ];

    //Cek member Id dan money
    if(memberId !=='' && money > 50000){

        //Cek barang yang bisa dibeli:
        var pesanan = [];
        var sisaUang = money;
        for(var i = 0;i<listPrice.length;i++){
            // Tambahkan item
            if(sisaUang >= listPrice[i][1] && sisaUang>0){
                sisaUang = sisaUang - listPrice[i][1];
                pesanan.push(listPrice[i][0]);
            }
        }

        var displayBill = {
            memberId: memberId,
            money: money,
            listPurchased: pesanan,
            changeMoney: sisaUang
        }

        return displayBill;                
    }else if(memberId !==''&& money<50000){
        return 'Mohon maaf, uang tidak cukup'
    }else{
        return 'Mohon maaf, toko X hanya berlalu untuk member saja';
    }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja