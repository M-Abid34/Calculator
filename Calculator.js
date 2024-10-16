const display = document.querySelector('.input-bar');


function AppendtoDisplay(input){
    display.value += input;
}



function ToCalculate(){
    display.value = eval(display.value);
}

function ToClear(){
}
