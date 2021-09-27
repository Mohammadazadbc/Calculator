const turnOff = document.getElementById('turn-off')



function data(val){
    calc.display.value += val;
}

function ac(val){
    calc.display.value =""
}
function c(val){
    calc.display.value = calc.display.value.slice(0, -1)
}

function egal(){
    calc.display.value = eval(calc.display.value);
}

turnOff.addEventListener('click', ()=>{
    window.close();
})
