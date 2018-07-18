console.log('Exersice 13 - TokoX \n');

//Definisikan fungsi
function countProfit(shoppers) {

    let listBarang = [
        ['Sepatu Stacattu',1500000,10],
        ['Baju Zoro',500000,2],
        ['Sweater Uniklooh',175000,1]
    ];
    var salesArr = [];
    var salesSummary = '';

    if(shoppers.length > 0){
        //get the product
        for(var i = 0; i<listBarang.length;i++){
            var nama = [];

            //Check the amount of money before get the name
            var availStock = listBarang[i][2];
            var salesQty = 0;
            var salesPerItem = 0;
            var leftOver = 0;
            for(var j = 0; j<shoppers.length;j++){
                if(listBarang[i][0]===shoppers[j]['product']){

                    //if we still have some stock to fulfill the request, 
                    // Count sales qty and available stock
                    if(availStock >=shoppers[j]['amount']){

                        salesQty = salesQty + shoppers[j]['amount'];
                        availStock = availStock - salesQty;
                        
                        // Push the name of the buyer
                        nama.push(shoppers[j]['name']);
                        
                    }
                }
                // get the available stock
                if(salesQty >0){
                    leftOver = listBarang[i][2] - salesQty;
                }else if(salesQty === 0){
                    leftOver = listBarang[i][2];
                }

                //Count sales amount
                salesPerItem = salesQty*listBarang[i][1];
            }

            
            var salesSummary = {
                product: listBarang[i][0],
                shoppers: nama,
                leftOver: leftOver,
                totalProfit: salesPerItem
            }
            salesArr.push(salesSummary);
        }
    }
    return salesArr;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]