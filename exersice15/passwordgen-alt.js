console.log('Exersice15 - Password Generator w/o Rekursif\n');

// Definisikan fungsi

function changeVocals(str) {
    var newStr = '';
    for(var i = 0; i<str.length;i++){
        if(str[i]==='a'){
            newStr = newStr +'b';
        }else if(str[i]==='A'){
            newStr = newStr +'B';
        }else if(str[i]==='e'){
            newStr = newStr + 'f';
        }else if(str[i]==='E'){
            newStr = newStr + 'F';
        }else if(str[i]==='i'){
            newStr = newStr + 'j';
        }else if(str[i]==='I'){
            newStr = newStr + 'J';
        }else if(str[i]==='o'){
            newStr = newStr + 'p';
        }else if(str[i]==='O'){
            newStr = newStr + 'P';
        }else if(str[i]==='u'){
            newStr = newStr + 'v';
        }else if(str[i]==='U'){
            newStr = newStr + 'V';
        }else{
            newStr = newStr + str[i];
        }
    }
    return newStr;
}

function reverseWord(str) {

    str = changeVocals(str);

    var revStr = '';
    for(var i =str.length-1;i>=0;i--){
        revStr = revStr + str[i];
    }
    return revStr;
}

function setLowerUpperCase(str) {

    str = reverseWord(str);

    var lowUpCaseStr = '';
    for(var i = 0;i<str.length;i++){
        if(str[i] === str[i].toLowerCase()){
            lowUpCaseStr = lowUpCaseStr + str[i].toUpperCase();
        }else if(str[i]=== str[i].toUpperCase()){
            lowUpCaseStr = lowUpCaseStr + str[i].toLowerCase();
        }else if(str[i]===' '){
            lowUpCaseStr = lowUpCaseStr + str[i];
        }
    }
    return lowUpCaseStr;
}

function removeSpaces(str) {
    // console.log(str);
    str = setLowerUpperCase(str);
    
    var removeSpaceStr = '';
    for(var i = 0;i< str.length;i++){
        if(str[i]!==' '){
            removeSpaceStr = removeSpaceStr + str[i];
        }
    }
    return removeSpaceStr;
}

function passwordGenerator(name) {
    if(name.length>=5){
        name = removeSpaces(name);
        return name;
    }
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
}

// console.log(changeVocals('Sergei Dragunov'));
// console.log(reverseWord('Sergei Dragunov'));
// console.log(setLowerUpperCase('Sergei Dragunov'));
// console.log(removeSpaces('Sergei Dragunov'));


//Test Case
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'