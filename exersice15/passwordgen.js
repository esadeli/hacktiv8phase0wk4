console.log('Exersice15 - Password Generator with rekursif\n');

// Definisikan fungsi
function changeVocals(str) {
    var newStr = '';

    // Base Case
    if(str.length===0){
        return '';
    }
   
    if(str[0]==='a'){
        newStr = newStr +'b';
    }else if(str[0]==='A'){
        newStr = newStr +'B';
    }else if(str[0]==='e'){
        newStr = newStr + 'f';
    }else if(str[0]==='E'){
        newStr = newStr + 'F';
    }else if(str[0]==='i'){
        newStr = newStr + 'j';
    }else if(str[0]==='I'){
        newStr = newStr + 'J';
    }else if(str[0]==='o'){
        newStr = newStr + 'p';
    }else if(str[0]==='O'){
        newStr = newStr + 'P';
    }else if(str[0]==='u'){
        newStr = newStr + 'v';
    }else if(str[0]==='U'){
        newStr = newStr + 'V';
    }else{
        newStr = newStr + str[0];
    }
    return newStr+changeVocals(str.substr(1));
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

//Test Case
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'